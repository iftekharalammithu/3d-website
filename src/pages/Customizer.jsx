import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { FilterTabs, EditorTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  Aipicker,
  Colorpicker,
  Filepicker,
  Tab,
  Custombutton,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            {...slideAnimation("left")}
            className="absolute top-0 left-0 z-10 "
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleclick={() => {}}></Tab>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute top-5 right-5 z-10"
            {...fadeAnimation}
          >
            <Custombutton
              type="filled"
              title="Go Back"
              handelClick={() => {
                state.intro = true;
              }}
              custonStyles="w-fit px-4 py-2.5 font-bold text-sm "
            ></Custombutton>
          </motion.div>
          <motion.div
            className="filtertabs-container "
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                isFilterTab
                isActivTab=""
                tab={tab}
                handleclick={() => {}}
              ></Tab>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
