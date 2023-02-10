import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Planet_1 = () => {

    const planetRef = useRef()

    useFrame((state, delta) => {
        planetRef.current.rotation.y -= 0.002,
        planetRef.current.rotation.x -= 0.001
    })

    const planet = useLoader(GLTFLoader, '/models/homepage/hero_planet.gltf')

    return (
        <>
            <ambientLight intensity={0.25} color={'#61F570'} />
            <pointLight castShadow position={[-2, -1, 2]} color={'#7161F5'} intensity={0.75} />
            <pointLight castShadow position={[5, 3, -2]} color={'#A362F5'} intensity={0.75} />

            <mesh ref={planetRef}>
                <primitive object={planet.scene}/>
            </mesh>
        </>
    )
}

export default Planet_1