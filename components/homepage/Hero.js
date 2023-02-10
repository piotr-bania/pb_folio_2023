import React, { Suspense, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import Planet_1 from './Planet_1'
import { Fog } from 'three'

const Hero = () => {
    return (
        <section id="hero">
            <h1 className="heading">Transforming <br /> the digital universe through code and creativity</h1>
            <h3 className="subheading">Fusing technology and imagination to create something truly unique</h3>
            <div className="cta">
                <Link href='#projects'><button>View my latest missions</button></Link>
            </div>

            <div className='canvas' // onCreated={(state)=> {
                    // state.gl.setClearColor('#000000')
                    // state.scene.fog = new Fog('#FFFFFF', 1, 10)
                    // }}
                >
                <Canvas camera={{
                        position: [-1, 0, 6],
                        rotation: [0, 0, 0],
                        fov: 25 }}>
                    <Suspense fallback={null}>
                        {/*
                        <Planet_1 /> */}
                        {/*
                        <Fog /> */}
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero