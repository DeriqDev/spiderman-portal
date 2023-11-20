import { RoundedBox, MeshPortalMaterial, Environment, useTexture, Text } from "@react-three/drei"
import * as THREE from 'three'
import { MilesSpideman } from "../../public/Miles"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"

export default function MilesSpiderman( ...props){

    const map = new useTexture('./digital_painting_new_york_city_from_the_sky.jpg')
    const [active, setActive] = useState(null)
    const name =  "Miles Morales"
    const refPortal = useRef()

    useFrame((_state, delta) =>{
        const worldOpen = active === name
        easing.damp(refPortal.current, "blend", worldOpen ? 1 : 0, 0.2, delta)
        
    })
    return(
        
        <group position={[0, 0, 0]} {...props}>
            <Text font="./fonts/comback-home-font/CombackHomeRegular-jEMd9.ttf"
                    position={[0, -1.4, 0.11]}
                    anchorY={'bottom'}
                    fontSize={0.4}>
                {name}
                <meshBasicMaterial color="#a71814" toneMapped={false} />
            </Text>
            <RoundedBox args={[2, 3, 0.2]} 
                        onDoubleClick={() => setActive(active === name ? null : name)}>
    
            <MeshPortalMaterial ref={refPortal}>
            <ambientLight intensity={ 1 } />
            <Environment preset='sunset'/>
            <MilesSpideman position-y={-1}/>
            <mesh>
                <sphereGeometry args={[5, 64, 64]} />
                <meshStandardMaterial map={map} side={THREE.BackSide}/>
            </mesh>
            </MeshPortalMaterial>
            </RoundedBox>
        </group>
    ) 
}