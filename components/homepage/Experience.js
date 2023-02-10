import React, { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Planet_1 from './Planet_1'
import { Fog } from 'three'

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