import React, { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas, useFrame  } from '@react-three/fiber'

const Menu = () => {
  return (
    <section id='menu'>
        <Canvas className='canvas'>
            <Suspense fallback={null}>

            </Suspense>
        </Canvas>
        <h1>Menu</h1>
    </section>
  )
}

export default Menu