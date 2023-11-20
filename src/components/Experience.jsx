import { MeshReflectorMaterial, useTexture, Environment, CameraControls, Float, Text } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import MilesSpiderman from './MilesSpiderman'
import SpiderPunk from './SpiderPunk'
import OharaSpiderMan from './OharaSpiderman'
import { useEffect, useRef, useState } from 'react'
import { useFrame, useThree } from "@react-three/fiber"
import { Model } from '../../public/Spiderman'
import { Spider } from '../../public/Superior_spiderman'

export default function Experience()
{  
    const [active, setActive] = useState(null)
    const [hovered, setHovered] = useState(null)
    const scene = useThree((state) => state.scene)
    const refControls = useRef()

    // useEffect(() => {
    //     if (active){
    //         const targetPosition = new THREE.Vector3()
    //         scene.getObjectByName(active).getWorldPosition(targetPosition)
    //        refControls.current.setLooat(0, 0, 0, targetPosition.x, targetPosition.y, targetPosition.z) 
    //     }else{
    //         refControls.current.setLookat(
    //             0,
    //              0,
    //               10,
    //                0,
    //                 0, 0, true,
    //                 )
    //     }
    // }, [active])


    return (
        <>
    {/* <Perf position="top-left" /> */}

<CameraControls ref={refControls}/>

<Text font="./fonts/Spider-Man.otf"
                    position={[0, 2, -1]}
                    anchorY={'bottom'}
                    fontSize={0.5}>
                    SPIDERMAN
                <meshBasicMaterial color="#a71814" toneMapped={false} />
            </Text>


<directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
<ambientLight intensity={ 0.5 } />
<Environment preset='city'/>

<Spider position={[4, -3, 1]}/>

<Float>
    <MilesSpiderman
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
    />
</Float>
<Float>
    <SpiderPunk 
         active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
    />
</Float>
<Float>
    <OharaSpiderMan
         active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
    />
</Float>


//PLANE
   <mesh receiveShadow position-y={ - 3 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
    <planeGeometry args={[50, 50]}/>
    <MeshReflectorMaterial distortion={0.5}
        mirror={0.5} 
        blur={[400, 100]} 
        resolution={1024} 
        color="#040438" metalness={0.6}
        roughness={1} />
</mesh>

</>
    )
}