import Ohara from "../../public/Ohara"
import { useTexture, RoundedBox, MeshPortalMaterial, Environment, Text, CameraControls } from "@react-three/drei"
import * as THREE from 'three'
import { useState, useRef, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { easing } from "maath"

export default function OharaSpiderMan(...props){

    const map = new useTexture('./digital_painting_punk_rock_version_of_spider-man_f.jpg')
    const name =  "Miguel OHara"
    const [active, setActive] = useState(null)
    const refPortal = useRef()
    const scene = useThree((state) => state.scene)
    const refControls = useRef()

    // useEffect(() => {
    //     if (active){
    //         const targetPosition = new THREE.Vector3()
    //         scene.getObjectByName(active).getWorldPosition(targetPosition)
    //        refControls.current.setLookat(0, 0, 3, targetPosition.x, targetPosition.y, targetPosition.z, true) 
    //     }else{
    //         refControls.current.setLookat(
    //             0,
    //              0,
    //               6,
    //                0,
    //                 0,
    //                  0, true,
    //                 )
    //     }
    // }, [active])

    useFrame((_state, delta) =>{
        const worldOpen = active === name
        easing.damp(refPortal.current, "blend", worldOpen ? 1 : 0, 0.2, delta)
    })
    return(
       <>
       <CameraControls ref={refControls} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI/ 6}/>
        <group rotation-y={-0.3} position={[3, 0, 0]}>
         <Text font="./fonts/comback-home-font/CombackHomeRegular-jEMd9.ttf"
                    position={[0, -1.4, 0.11]}
                    anchorY={'bottom'}
                    fontSize={0.35}>
                {name}
                <meshBasicMaterial color="#a71814" toneMapped={false} />
            </Text>
            <RoundedBox 
            name={name}
                args={[2, 3, 0.2]} 
                onDoubleClick={() => setActive(active === name ? null : name)}>
                <MeshPortalMaterial ref={refPortal}>
                    <ambientLight intensity={ 1 } />
                    <Environment preset='sunset'/>
                    <Ohara position-y={-1}/>
                    <mesh>
                        <sphereGeometry args={[5, 64, 64]} />
                        <meshStandardMaterial map={map} side={THREE.BackSide}/>
                    </mesh>
                </MeshPortalMaterial>
            </RoundedBox>
        </group>

        </>
    )
}