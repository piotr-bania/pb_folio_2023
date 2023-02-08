import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text, Float, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MeshStandardMaterial, TextureLoader } from 'three'

import Model from '../models/Hero_planet'

const Planet_1 = () => {

    const planetRef = useRef()

    useFrame((state, delta) => {
        planetRef.current.rotation.y -= 0.0002,
        planetRef.current.rotation.x -= 0.0001
    })

    const planet = useLoader(GLTFLoader, '/models/homepage/planet.gltf')

    const textureLoader = new TextureLoader()
    const normalMap = textureLoader.load('/public/models/homepage/textures/bump.jpg')
    const roughnessMap = textureLoader.load('/public/models/homepage/textures/roughness.jpg')
    const diffuseMap = textureLoader.load('/public/models/homepage/textures/diffuse.jpg')

    return (
        <>
            <ambientLight intensity={0.25} color={'#7161F5'} />
            <pointLight castShadow position={[-2, -1, 2]} color={'#F57061'} intensity={1.75} />
            <pointLight castShadow position={[5, 3, -2]} color={'#A362F5'} intensity={1.75} />

            <mesh ref={planetRef}>
                <primitive object={planet.scene}/>

                {/* <sphereGeometry args={[1, 128, 128]} /> */}
                <meshStandardMaterial
                    // map={diffuseMap}
                    // normalMap={normalMap}
                    // roughnessMap={roughnessMap}
                    // displacementMap={normalMap}
                    // displacementScale={0.92}
                    // bumpScale={0.92}
                />
            </mesh>
        </>
    )
}

export default Planet_1