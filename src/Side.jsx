import { usePlane } from '@react-three/cannon';
import * as THREE from 'three';

export default function Side({ position, args, rotation, texture }) {
  const [ref] = usePlane(() => ({
    mass: 0,
    rotation,
    position,
  }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={args} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}
