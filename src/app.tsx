import { Geom3 } from '@jscad/modeling/src/geometries/types'
// @ts-ignore
import objSerializer from '@jscad/obj-serializer'
// @ts-ignore
import stlSerializer from '@jscad/stl-serializer'
import { useState } from 'react'

import { Editor } from './editor'
import { Viewport } from './viewport'

async function saveFile(name: string, blob: Blob) {
    const a = document.createElement('a')
    a.download = name
    a.href = URL.createObjectURL(blob)
    a.addEventListener('click', function() {
        setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000)
    })
    a.click()
}

export function App() {
    const [geometry, setGeometry] = useState<Geom3 | null>(null)

    const onChange = function(geometry: Geom3) {
        setGeometry(function(prevGeometry) {
            if (JSON.stringify(geometry) === JSON.stringify(prevGeometry))
            {
                return prevGeometry
            }
            return geometry
        })
    }

    function downloadStl() {
        const rawData = stlSerializer.serialize({binary: true}, geometry)
        const blob = new Blob(rawData)
        saveFile('geometry.stl', blob)
    }

    function downloadObj() {
        const rawData = objSerializer.serialize({binary: true}, geometry)
        const blob = new Blob(rawData)
        saveFile('geometry.obj', blob)
    }
    return (
        <>
            <div className="editor">
                <Editor onChange={onChange} />
            </div>
            <div className="aside">
                {geometry && (<>
                    <div className="viewport"><Viewport geometry={geometry} /></div>
                    <div>
                        <button onClick={downloadStl}>Download STL</button>
                        <button onClick={downloadObj}>Download OBJ</button>
                    </div>
                </>)}
            </div>
        </>
    )
}
