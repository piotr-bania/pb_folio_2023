import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/hero_planet.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Icosphere.geometry} material={materials.terrain} />
    </group>
  )
}

useGLTF.preload('/hero_planet.gltf')