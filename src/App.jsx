import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Physics } from '@react-three/cannon';
import Box from './Box';
import Sphere from './Sphere';
import Floor from './Floor';
import Side from './Side';

export default function App() {
  const [crate, stoneGray, stoneRed, stoneWhite, stoneViolet, wood] = useLoader(TextureLoader, [
    './textures/crate.gif',
    './textures/stone-gray.jpg',
    './textures/stone-red.jpg',
    './textures/stone-white.jpg',
    './textures/stone-violet.jpg',
    './textures/wood.jpg',
  ]);

  return (
    <Canvas camera={{ position: [5, 20, 20] }}>
      <Physics>
        {/* <directionalLight position={[1, 1, 1]} /> */}
        <ambientLight intensity={0.5} />
        <Box position={[0, 5, 0]} args={[2, 1, 2]} texture={crate} />
        <Sphere position={[0.75, 10, 0]} args={[1, 16, 16]} texture={stoneGray} />
        <Sphere position={[1.5, 15, 0]} args={[1.25, 16, 16]} texture={stoneRed} />
        <Sphere position={[-0.75, 20, 0]} args={[1, 16, 16]} texture={stoneWhite} />
        <Sphere position={[-1.5, 25, 0]} args={[1.5, 16, 16]} texture={stoneViolet} />
        <Floor position={[0, -39, 0]} texture={wood} />
        <Side position={[0, -37, -40]} args={[100, 5]} rotation={[0, 0, 0]} texture={stoneRed} />
        <Side position={[0, -37, 40]} args={[100, 5]} rotation={[3, 0, 0]} texture={stoneRed} />
        <Side position={[-40, -37, 0]} args={[100, 5]} rotation={[0, 1.55, 0]} texture={stoneRed} />
        <Side position={[40, -37, 0]} args={[100, 5]} rotation={[0, -1.55, 0]} texture={stoneRed} />
        {/* <Side
          position={[0, -5, -10]}
          args={[20, 20]}
          rotation={[-Math.PI / 2.5, 0, 0]}
          texture={wood}
        /> */}
      </Physics>
      <axesHelper args={[10]} />
      <gridHelper position={[0, -40, 0]} args={[110, 110, 'pink', 'gray']} />
      <OrbitControls />
    </Canvas>
  );
}
