import { booleans, colors, primitives } from '@jscad/modeling'
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

    switch (node.type) {
        case 'number':
            return { number: inputValues.number }
        case 'cube':
            return { geometry: cube({ size: inputValues.size }) }
        case 'sphere':
            return { geometry: sphere({ radius: inputValues.radius }) }
        default:
            return inputValues
    }
}

export const engine = new RootEngine(config, resolvePorts, resolveNodes)
