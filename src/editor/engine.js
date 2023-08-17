import { booleans, colors, primitives, transforms } from '@jscad/modeling'
import { RootEngine } from 'flume'

import { config } from './config'


function resolvePorts(portType, data) {
    switch (portType) {
        case 'geometry':
            return data.geometry
        case 'number':
            return data.number
        default:
            return data
    }
}

function resolveNodes(node, inputValues, nodeType, context) {
    const { cube, sphere } = primitives
    const { rotate, scale, translate } = transforms
    const { intersect, subtract, union } = booleans

    switch (node.type) {
        case 'number':
            return { number: inputValues.number }
        case 'vec3':
            return { vec3: [ inputValues.x, inputValues.y, inputValues.z ] }
        case 'cube':
            return { geometry: cube({ size: inputValues.size }) }
        case 'sphere':
            return { geometry: sphere({ radius: inputValues.radius }) }
        case 'rotate':
            return { geometry: rotate(inputValues.vector, inputValues.geometry) }
        case 'scale':
            return { geometry: scale(inputValues.vector, inputValues.geometry) }
        case 'translate':
            return { geometry: translate(inputValues.vector, inputValues.geometry) }
        case 'intersect':
            return { geometry: intersect(inputValues.x, inputValues.y) }
        case 'subtract':
            return { geometry: subtract(inputValues.x, inputValues.y) }
        case 'union':
            return { geometry: union(inputValues.x, inputValues.y) }
        default:
            return inputValues
    }
}

export const engine = new RootEngine(config, resolvePorts, resolveNodes)
