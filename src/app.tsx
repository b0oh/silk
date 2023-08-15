import { Geom3 } from '@jscad/modeling/src/geometries/types'
import { useState } from 'react'

import { Editor } from './editor'
import { Viewport } from './viewport'

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

    return (
        <div style={{ display: 'flex', flexFlow: 'row' }}>
            <div style={{ display: 'flex', width: 900, height: 600 }}>
                <Editor onChange={onChange} />
            </div>
            <div style={{ display: 'flex' }}>
                {geometry && (<div style={{ width: 300, height: 300 }}><Viewport geometry={geometry} /></div>)}
            </div>
        </div>
    )
}
