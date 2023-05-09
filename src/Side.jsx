import { usePlane } from '@react-three/cannon';

export default function Side({ position, args, rotation, texture }) {
  const [ref] = usePlane(() => ({
    rotation,
    position,
  }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={args} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
