import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Camerarig = ({ children }) => {
  const snap = useSnapshot(state);
  const group = useRef();

  return <group ref={group}>{children}</group>;
};

export default Camerarig;
