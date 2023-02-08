import Head from 'next/head'

import { motion as m } from 'framer-motion'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { Fog } from 'three'

import Hero from '../components/homepage/Hero'
import Planet_1 from '../components/homepage/Planet_1'

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
                transition={{
                    duration: 1.25,
                    ease: 'easeOut',
                    delay: 0.25
                }}
            >

                <div className='canvas'
                    // onCreated={(state)=> {
                    //     state.gl.setClearColor('#192933')
                    //     state.scene.fog = new Fog('#192933', 1, 5)
                    // }}
                >
                    <Canvas camera={{
                        position: [0, 0, 5],
                        rotation: [0.05, 0.2, 0.2],
                        fov: 25 }}
                        >
                        <Suspense fallback={null}>
                            <Planet_1 />
                        </Suspense>
                    </Canvas>
                </div>
                
                <Hero />
            </m.main>
        </>
    )
}