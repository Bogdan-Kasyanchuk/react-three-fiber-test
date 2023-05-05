// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei'
// import Box from './Box';

// export default function App() {
//   return (
//     <Canvas camera={{ position: [0, 0, 2] }}>
//       <Box position={[-0.75, 0, 0]} name='A' />
//       <Box position={[0.75, 0, 0]} name='B' />
//       <OrbitControls />
//     </Canvas>
//   );
// }

import { Canvas } from '@react-three/fiber';
import Polyhedron from './Polyhedron';
import * as THREE from 'three';
import { OrbitControls, Stats } from '@react-three/drei';

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ];

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
}
