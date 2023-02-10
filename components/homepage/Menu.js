import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const Menu = () => {
    return (
        <>
            <mesh scale={[0.5, 0.5, 0.5]} position={[5, 2.5, 1]}>
                <boxGeometry />
                <meshBasicMaterial color="#7161F5" />
            </mesh>

        </>
    )
}

export default Menu