import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { FilterTabs, EditorTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";

const Customizer = () => {
  return <div>Customizerd</div>;
};

export default Customizer;
