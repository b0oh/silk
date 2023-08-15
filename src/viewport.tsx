import { Geom3 } from '@jscad/modeling/src/geometries/types'
import {
    prepareRender,
    drawCommands,
    cameras,
    entitiesFromSolids,
} from '@jscad/regl-renderer'
import { useCallback, useEffect, useRef } from 'react'

interface Props {
  geometry: Geom3
}

export function Viewport({ geometry }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>()
    const renderRef = useRef<(data: any) => void>()
    const optionsRef = useRef({})

    const animate = useCallback(function() {
        renderRef.current!(optionsRef.current)
        animationRef.current = window.requestAnimationFrame(animate)
    }, [])

    useEffect(function() {
        const canvas = canvasRef.current as HTMLCanvasElement
        const gl = canvas.getContext('webgl')!

        renderRef.current = prepareRender({ glOptions: { gl }})
        animationRef.current = window.requestAnimationFrame(animate)

        return () => window.cancelAnimationFrame(animationRef.current!)
    }, [canvasRef, animate])

    useEffect(function() {
        const canvas = canvasRef.current as HTMLCanvasElement
        const width = canvas.clientWidth
        const height = canvas.clientHeight
        const perspectiveCamera = cameras.perspective
        const camera = Object.assign({}, perspectiveCamera.defaults)
        perspectiveCamera.setProjection(camera, camera, { width, height })
        perspectiveCamera.update(camera, camera)

        const entities = entitiesFromSolids({}, geometry)

        optionsRef.current = {
            camera,
            drawCommands: {
                drawAxis: drawCommands.drawAxis,
                drawGrid: drawCommands.drawGrid,
                drawLines: drawCommands.drawLines,
                drawMesh: drawCommands.drawMesh
            },
            entities
        }
    }, [geometry])

    return (
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}/>
    )
}
