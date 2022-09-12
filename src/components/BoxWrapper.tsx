import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function Sphere(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) =>
    clicked
      ? (ref.current.rotation.y += 0.01)
      : (ref.current.rotation.x += 0.01)
  );
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 3 : 2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      {/* eslint-disable-next-line react/no-unknown-property */}
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={hovered ? "#93C5FD" : "red"} />
    </mesh>
  );
}

// createRoot(document.getElementById("root") as HTMLElement).render(
export default function SphereWrapper() {
  return (
    <Canvas>
      <ambientLight />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <pointLight position={[10, 10, 10]} intensity={3} />
      <Sphere position={[0, 0, 0]} />
    </Canvas>
  );
}
