import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Box(props) {
  const ref = useRef();
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    console.log(ref.current.geometry.uuid);
  });

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh {...props} ref={ref} onPointerDown={() => setRotate(!rotate)}>
      {rotate ? <boxGeometry /> : <sphereGeometry args={[0.7, 16, 16]} />}

      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  );
}
