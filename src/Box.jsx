import { useBox } from '@react-three/cannon';
import { useRef,useEffect } from 'react'

export default function Box({ position, args, texture }) {
  const [ref, api] = useBox(() => ({ args, mass: 1, position }));

  const velocity = useRef([0, 0, 0])
useEffect(() => {
  const unsubscribe = api.velocity.subscribe((v) => (velocity.current = v))
  return unsubscribe
})



  return (
    <mesh ref={ref} onPointerDown={() => api.position.set(1, 1, 1)}>
      <boxGeometry args={args}/>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
