import { useSphere } from '@react-three/cannon';

export default function Sphere({ position, args, texture }) {
  const [ref, api] = useSphere(() => ({ args, mass: 1, position }));

  return (
    <mesh ref={ref} onPointerDown={() => api.velocity.set(0, 25, 0)}>
      <sphereGeometry args={args} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
