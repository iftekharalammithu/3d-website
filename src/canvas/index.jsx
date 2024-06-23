import React from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";
import Backdrop from "./Backdrop";
import Camerarig from "./Camerarig";
import Shirt from "./Shirt";

const Canvasmodel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}></ambientLight>
      <Environment preset="city"></Environment>
      <Camerarig>
        {/* <Backdrop></Backdrop> */}
        <Center>
          <Shirt></Shirt>
        </Center>
      </Camerarig>
    </Canvas>
  );
};

export default Canvasmodel;
