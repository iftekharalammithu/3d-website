import { AnimatePresence, motion } from "framer-motion";
import React, { act, useEffect, useState } from "react";
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
  const [file, setfile] = useState("");
  const [promt, setpromt] = useState("");
  const [generateimg, setgenerateimg] = useState(false);
  const [activetab, setactivetab] = useState("");
  const [filtertab, setfiltertab] = useState({
    logoshirt: true,
    stylishshirt: false,
  });

  const generatetabcontent = () => {
    switch (activetab) {
      case "colorpicker":
        return <Colorpicker></Colorpicker>;
      case "aipicker":
        return <Aipicker></Aipicker>;
      case "filepicker":
        return (
          <Filepicker
            file={file}
            setfile={setfile}
            readfile={readfile}
          ></Filepicker>
        );

      default:
        return null;
    }
  };

  const handdecals = (result, type) => {
    const decaltype = DecalTypes[type];
    state[decaltype.stateProperty] = result;
    if (!filtertab[decaltype.filtertab]) {
      handleactivetab(decaltype.filtertab);
    }
  };
  const handleactivetab = (tabname) => {
    switch (tabname) {
      case "logoshirt":
        state.isLogoTexture = !filtertab[tabname];
      case "stylishshirt":
        state.isFullTexture = !filtertab[tabname];

      default:
        state.isFullTexture = false;
        state.isLogoTexture = true;
    }
    setfiltertab((prev) => ({ ...prev, [tabname]: !prev[tabname] }));
  };
  const readfile = (type) => {
    reader(file).then((result) => {
      handdecals(result, type);
      setactivetab("");
    });
  };

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
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleclick={() => {
                      setactivetab(tab.name);
                    }}
                  ></Tab>
                ))}
                {generatetabcontent()}
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
                isActivTab={filtertab[tab.name]}
                tab={tab}
                handleclick={() => {
                  handleactivetab(tab.name);
                }}
              ></Tab>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
