import { Colors, Controls, FlumeConfig } from 'flume'

export const config = new FlumeConfig()

config
    .addPortType({
        type: 'number',
        name: 'number',
        label: 'Number',
        color: Colors.red,
        controls: [
            Controls.number({
                name: 'number',
                label: 'Number'
            })
        ]
    })
    .addPortType({
        type: 'geometry',
        name: 'geometry',
        label: 'Geometry',
        color: Colors.green
    })
    .addRootNodeType({
        type: 'geometry',
        label: 'Output',
        initialWidth: 170,
        inputs: ports => [
            ports.geometry({
                name: 'geometry',
                label: 'Geometry'
            })
        ]
    })
    .addNodeType({
        type: 'number',
        label: 'Number',
        initialWidth: 150,
        inputs: ports => [
            ports.number()
        ],
        outputs: ports => [
            ports.number()
        ]
    })
    .addNodeType({
        type: 'cube',
        label: 'Cube',
        initialWidth: 150,
        inputs: ports => [
            ports.number({ name: 'size' })
        ],
        outputs: ports => [
            ports.geometry()
        ]
    })
    .addNodeType({
        type: 'sphere',
        label: 'Sphere',
        initialWidth: 150,
        inputs: ports => [
            ports.number({ name: 'radius' })
        ],
        outputs: ports => [
            ports.geometry()
        ]
    })
