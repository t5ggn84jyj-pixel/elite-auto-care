import { useRef, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  useGLTF,
  Environment,
  ContactShadows,
  Center,
} from '@react-three/drei'
import * as THREE from 'three'

function Car() {
  const car = useRef()
  const { scene } = useGLTF('/bmw-m4.glb')

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const size = box.getSize(new THREE.Vector3())
    const maxDimension = Math.max(size.x, size.y, size.z)

    if (maxDimension > 0) {
      scene.scale.setScalar(3.5 / maxDimension)
    }
  }, [scene])

  useFrame((state) => {
    if (car.current) {
      car.current.rotation.y =
        -0.5 + state.pointer.x * 0.15
    }
  })

  return (
    <Center>
      <group ref={car} scale={0.65} position={[1.2, -0.2, 0]}>
        <primitive
  object={scene}
  scale={0.35}
  position={[0, -0.5, 0]}
/>
      </group>
    </Center>
  )
}

export default function BMWModel() {
  return (
    <>
      <Environment preset="studio" />
      <Car />
      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.4}
        scale={8}
        blur={2}
      />
    </>
  )
}
