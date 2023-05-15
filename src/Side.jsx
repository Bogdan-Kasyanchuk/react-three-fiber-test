import { usePlane } from '@react-three/cannon';
import * as THREE from 'three';

export default function Side({ position, args, rotation, texture }) {
  const [ref] = usePlane(() => ({
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
