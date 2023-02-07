import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text, Float, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MeshStandardMaterial, TextureLoader } from 'three'

const Planet_1 = () => {

    const planetRef = useRef()

    useFrame((state, delta) => {
        planetRef.current.rotation.y -= 0.002,
        planetRef.current.rotation.x += 0.003
    })

    // const gltf = useLoader(GLTFLoader, "/models/homepage/hero_planet/gltf")

    return (
        <>
                        <ambientLight intensity={0.5} color={'#FFFFFF'} />
            <pointLight castShadow position={[0, 0, 2]} color={'#F57061'} intensity={0.5} />
            <pointLight castShadow position={[2, 0, -3]} color={'#E6F561'} intensity={0.5} />

            <mesh ref={planetRef}>
                <icosahedronGeometry />
                <meshStandardMaterial color={'#7161F5'}/>
            </mesh>
        </>
    )
}

export default Planet_1