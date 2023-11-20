import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./components/Experience";
import Overlay from "./components/Overlay";

export default function App(){

    return(
        <>
            <Canvas
    shadows
    camera={ {
        fov: 30,
        near: 0.1,
        far: 200,
        position: [ 0, 0, 10 ]
    } }
>

<Experience />
</Canvas>
<Overlay />
        </>
    )
}