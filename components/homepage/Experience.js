import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion as m } from 'framer-motion'
import Planet_1 from './Planet_1'
import Menu from './Menu'


const Experience = () => {
    return (
        <AnimatePresence>
            <m.div
                className='canvas'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 10, duration: 2 } }}
                >
                <Canvas camera={{
                    position: [-1, 0, 6],
                    rotation: [0, 0, 0],
                    fov: 25 }}>
                    <Suspense fallback={null}>
                        <Planet_1 />
                    </Suspense>
                </Canvas>
            </m.div>

            <m.div
                className="canvas_menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 9.5, duration: 2 } }}
                >
                <Canvas>
                    <Menu />
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Experience