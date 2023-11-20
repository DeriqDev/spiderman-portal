/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 spider_punk_from_across_the_spider_verse.glb
Author: CVRxEarth (https://sketchfab.com/CVRxEarth)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/spider-punk-from-across-the-spider-verse-31b9e56833d34121a9a0012985c6bc09
Title: Spider Punk from Across The Spider Verse
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PunkSpiderman(props) {
  const { nodes, materials } = useGLTF('/spider_punk_from_across_the_spider_verse.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh geometry={nodes.Object_12.geometry} material={materials.material} skeleton={nodes.Object_12.skeleton} />
          <skinnedMesh geometry={nodes.Object_14.geometry} material={materials.Red_Head} skeleton={nodes.Object_14.skeleton} />
          <skinnedMesh geometry={nodes.Object_16.geometry} material={materials.Boots} skeleton={nodes.Object_16.skeleton} />
          <skinnedMesh geometry={nodes.Object_18.geometry} material={materials['Boots.001']} skeleton={nodes.Object_18.skeleton} />
          <skinnedMesh geometry={nodes.Object_20.geometry} material={materials.material_0} skeleton={nodes.Object_20.skeleton} />
          <skinnedMesh geometry={nodes.Object_22.geometry} material={materials.material_0} skeleton={nodes.Object_22.skeleton} />
          <skinnedMesh geometry={nodes.Object_24.geometry} material={materials.Belt} skeleton={nodes.Object_24.skeleton} />
          <skinnedMesh geometry={nodes.Object_25.geometry} material={materials.Metalic} skeleton={nodes.Object_25.skeleton} />
          <skinnedMesh geometry={nodes.Object_27.geometry} material={materials.Blue} skeleton={nodes.Object_27.skeleton} />
          <skinnedMesh geometry={nodes.Object_29.geometry} material={materials.Jacket} skeleton={nodes.Object_29.skeleton} />
          <skinnedMesh geometry={nodes.Object_31.geometry} material={materials.Jacket_Shoulder} skeleton={nodes.Object_31.skeleton} />
          <skinnedMesh geometry={nodes.Object_32.geometry} material={materials.Spikes} skeleton={nodes.Object_32.skeleton} />
          <skinnedMesh geometry={nodes.Object_34.geometry} material={materials.Leggings} skeleton={nodes.Object_34.skeleton} />
        </group>
        {/* <group position={[779.191, 69.436, -19.111]} rotation={[0, 0, Math.PI / 2]} scale={[12.548, 4.466, 12.548]}>
          <mesh geometry={nodes.Guitar001_Guitar_0.geometry} material={materials.Guitar} />
          <mesh geometry={nodes.Guitar001_Guitar001_0.geometry} material={materials['Guitar.001']} />
          <mesh geometry={nodes.Guitar001_Material003_0.geometry} material={materials['Material.003']} />
        </group> */}
        {/* <group position={[700, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <primitive object={nodes._rootJoint_1} />
          <skinnedMesh geometry={nodes.Object_1483.geometry} material={materials.material} skeleton={nodes.Object_1483.skeleton} />
          <skinnedMesh geometry={nodes.Object_1485.geometry} material={materials.Red_Head} skeleton={nodes.Object_1485.skeleton} />
          <skinnedMesh geometry={nodes.Object_1487.geometry} material={materials.Boots} skeleton={nodes.Object_1487.skeleton} />
          <skinnedMesh geometry={nodes.Object_1489.geometry} material={materials['Boots.001']} skeleton={nodes.Object_1489.skeleton} />
          <skinnedMesh geometry={nodes.Object_1491.geometry} material={materials.material_0} skeleton={nodes.Object_1491.skeleton} />
          <skinnedMesh geometry={nodes.Object_1493.geometry} material={materials.material_0} skeleton={nodes.Object_1493.skeleton} />
          <skinnedMesh geometry={nodes.Object_1495.geometry} material={materials.Belt} skeleton={nodes.Object_1495.skeleton} />
          <skinnedMesh geometry={nodes.Object_1496.geometry} material={materials.Metalic} skeleton={nodes.Object_1496.skeleton} />
          <skinnedMesh geometry={nodes.Object_1498.geometry} material={materials.Blue} skeleton={nodes.Object_1498.skeleton} />
          <skinnedMesh geometry={nodes.Object_1500.geometry} material={materials.Jacket} skeleton={nodes.Object_1500.skeleton} />
          <skinnedMesh geometry={nodes.Object_1502.geometry} material={materials.Jacket_Shoulder} skeleton={nodes.Object_1502.skeleton} />
          <skinnedMesh geometry={nodes.Object_1503.geometry} material={materials.Spikes} skeleton={nodes.Object_1503.skeleton} />
          <skinnedMesh geometry={nodes.Object_1505.geometry} material={materials.Leggings} skeleton={nodes.Object_1505.skeleton} />
        </group> */}
        <mesh geometry={nodes.Plane_Material002_0.geometry} material={materials['Material.002']} position={[-17.435, 133.48, -257.687]} scale={148.832} />
      </group>
    </group>
  )
}

useGLTF.preload('/spider_punk_from_across_the_spider_verse.glb')