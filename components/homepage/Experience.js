import React, { Suspense, useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion as m } from 'framer-motion'
import Planet_1 from './Planet_1'
import { EffectComposer, Noise, Scanline, Bloom, Vignette, Glitch } from '@react-three/postprocessing'
import { Environment, Lightformer } from '@react-three/drei'

const Experience = () => {
    return (
        <AnimatePresence>
            <m.div
                className='canvas'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 10, duration: 2 } }}
                >
                <Canvas shadows camera={{
                    position: [-1, 0.5, 4],
                    rotation: [0, 0, 0],
                    fov: 25 }}>
                    <Suspense fallback={null}>
                        <Planet_1 />
                    </Suspense>
                    <Environment files={'./environment/kloppenheim_02_puresky_4k.hdr'} background blur={0.025} />
                    
                    <EffectComposer>
                        <Scanline density={1.5} opacity={0.15}/>
                        <Noise opacity={0.25} />
                        <Vignette eskil={false} offset={0.55} darkness={0.55} />
                        <Glitch
                        delay={[0.5, 5]}
                        duration={[0.01, 0.5]}
                        strength={[0.01, 0.5]}
                        ratio={0.95}
                        />
                    </EffectComposer>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Experience