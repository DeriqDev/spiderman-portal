import { useTexture, MeshPortalMaterial, RoundedBox, Environment, Text } from '@react-three/drei'
import * as THREE from 'three' 
import { PunkSpiderman } from '../../public/Punk'
import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"

export default function SpiderPunk(...props){

    const map = new useTexture('./digital_painting_punk_rock_worl.jpg')
    const [active, setActive] = useState(null)
    const name = "SpiderPunk"
    const refPortal = useRef()

    useFrame((_state, delta) =>{
        const worldOpen = active === name
        easing.damp(refPortal.current, "blend", worldOpen ? 1 : 0, 0.2, delta)
    })
    return(
        <group rotation-y={0.3} position={[-3, 0, 0]} {...props}>
        <Text font="./fonts/comback-home-font/CombackHomeRegular-jEMd9.ttf"
                    position={[0, -1.4, 0.11]}
                    anchorY={'bottom'}
                    fontSize={0.4}>
                {name}
                <meshBasicMaterial color="#a71814" toneMapped={false} />
            </Text>
            <RoundedBox args={[2, 3, 0.2]} onDoubleClick={() => setActive(active === name ? null : name)}>
                <MeshPortalMaterial ref={refPortal}>
                <ambientLight intensity={ 1 } />
                <Environment preset='sunset'/>
                <PunkSpiderman position-y={-1}/>
                <mesh>
                    <sphereGeometry args={[5, 64, 64]} />
                    <meshStandardMaterial map={map} side={THREE.BackSide}/>
                </mesh>
                </MeshPortalMaterial>
            </RoundedBox>
        </group>
    )
}