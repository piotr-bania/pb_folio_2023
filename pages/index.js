import Head from 'next/head'

import { motion as m } from 'framer-motion'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { Fog } from 'three'

import Hero from '../components/homepage/Hero'
import Planet_1 from '../components/homepage/Planet_1'
import Opening_scene from '../components/homepage/Opening_scene'

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
                    duration: 1,
                    ease: 'easeOut',
                    delay: 0.25
                }}
            >

                <div className='canvas'
                    // onCreated={(state)=> {
                    //     state.gl.setClearColor('#000000')
                    //     state.scene.fog = new Fog('#FFFFFF', 1, 10)
                    // }}
                >
                    <Canvas camera={{
                        position: [-1, 0, 6],
                        rotation: [0, 0, 0],
                        fov: 25 }}
                        >
                        <Suspense fallback={null}>
                            {/* <Planet_1 /> */}
                            {/* <Fog /> */}
                        </Suspense>
                    </Canvas>
                </div>
                
                {/* <Hero /> */}
                <Opening_scene />
            </m.main>
        </>
    )
}