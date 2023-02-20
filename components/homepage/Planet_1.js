import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Planet_1 = () => {

    const planetRef = useRef()

    useFrame((state, delta) => {
        planetRef.current.rotation.x += 0.0001,
        planetRef.current.rotation.y -= 0.0002,
        planetRef.current.rotation.z -= 0.0003
    })

    const planet = useLoader(GLTFLoader, '/models/test/planet.gltf')

    return (
        <>
            <ambientLight intensity={0.05} color={'#61F570'} />
            <pointLight castShadow position={[-2, -1, 2]} color={'#7161F5'} intensity={0.75} />
            <pointLight castShadow position={[2, 3, -2]} color={'#A362F5'} intensity={0.75} />

            <mesh castShadow receiveShadow ref={planetRef} scale={[0.1, 0.1, 0.1]} rotation={[0, 0, 0]}>
                <primitive object={planet.scene}/>
            </mesh>
        </>
    )
}

export default Planet_1