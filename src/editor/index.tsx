import { Geom3 } from '@jscad/modeling/src/geometries/types'
import { NodeEditor, useRootEngine } from 'flume'

import { config } from './config'
import { engine } from './engine'

interface Props {
    onChange: (geometry: Geom3) => void;
}

export function Editor({ onChange }: Props) {
    return (
        <NodeEditor
            defaultNodes={[
                {
                    type: 'geometry',
                    x: 0,
                    y: 0
                }
            ]}
            nodeTypes={config.nodeTypes}
            onChange={(nodes) => onChange(useRootEngine(nodes, engine, {}).geometry)}
            portTypes={config.portTypes}
        />
    )
}
