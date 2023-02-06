import Head from 'next/head'
import Hero from '../components/homepage/Hero'

import { motion as m } from 'framer-motion'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Fog } from 'three'

export default function Home() {
    return (
        <>

            <Head>
                <title>Piotr | Portfolio</title>
                <meta name="description" content="Piotr | Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo/logo.svg" />
            </Head>

            <m.main
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1.25, ease: 'easeOut', delay: 0.25}}
            >

                <Canvas className='canvas'
                    shadows 
                    onCreated={(state) => {
                        state.gl.setClearColor('#192933')
                        state.scene.fog = new Fog('#192933', 1, 20)
                    }}
                    camera={{fov: 25, position: [0, 1, 15], rotation: [0, 25, 0]}}
                >
                    <Suspense fallback={null}>
                        
                    </Suspense>
                </Canvas>

                <Hero/>
            </m.main>
        </>
    )
}