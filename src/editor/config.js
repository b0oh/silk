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
        type: 'vec3',
        name: 'vec3',
        label: 'Vector 3D',
        color: Colors.blue
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
        type: 'vec3',
        label: 'Vector 3D',
        initialWidth: 150,
        inputs: ports => [
            ports.number({ name: 'x' }),
            ports.number({ name: 'y' }),
            ports.number({ name: 'z' })
        ],
        outputs: ports => [
            ports.vec3()
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
    .addNodeType({
        type: 'rotate',
        label: 'Rotate',
        initialWidth: 150,
        inputs: ports => [
            ports.vec3({ name: 'vector' }),
            ports.geometry({ name: 'geometry' })
        ],
        outputs: ports => [
            ports.geometry()
        ]
    })
    .addNodeType({
        type: 'scale',
        label: 'Scale',
        initialWidth: 150,
        inputs: ports => [
            ports.vec3({ name: 'vector' }),
            ports.geometry({ name: 'geometry' })
        ],
        outputs: ports => [
            ports.geometry()
        ]
    })
    .addNodeType({
        type: 'translate',
        label: 'Translate',
        initialWidth: 150,
        inputs: ports => [
            ports.vec3({ name: 'vector' }),
            ports.geometry({ name: 'geometry' })
        ],
        outputs: ports => [
            ports.geometry()
        ]
    })
    .addNodeType({
        type: 'intersect',
        label: 'Intersect',
        initialWidth: 150,
        inputs: ports => [
            ports.geometry({ name: 'x' }),
            ports.geometry({ name: 'y' })
        ],
        outputs: ports => [
            ports.geometry()
        ]
    })
    .addNodeType({
        type: 'subtract',
        label: 'Subtract',
        initialWidth: 150,
        inputs: ports => [
            ports.geometry({ name: 'x', label: 'From' }),
            ports.geometry({ name: 'y' })
        ],
        outputs: ports => [
            ports.geometry()
        ]
    })
    .addNodeType({
        type: 'union',
        label: 'Union',
        initialWidth: 150,
        inputs: ports => [
            ports.geometry({ name: 'x' }),
            ports.geometry({ name: 'y' })
        ],
        outputs: ports => [
            ports.geometry()
        ]
    })
