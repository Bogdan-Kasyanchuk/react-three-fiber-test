import { useBox } from '@react-three/cannon';

export default function Box({ position, args, texture }) {
  const [ref] = useBox(() => ({ args, mass: 1, position }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
