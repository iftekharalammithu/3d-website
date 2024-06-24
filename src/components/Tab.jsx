import React from "react";
import Aipicker from "./Aipicker";
import Colorpicker from "./Colorpicker";
import Filepicker from "./Filepicker";
import state from "../store";
import { useSnapshot } from "valtio";

const Tab = ({ tab, handleclick, isActivTab, isFilterTab }) => {
  const snap = useSnapshot(state);
  const activstyle =
    isFilterTab && isActivTab
      ? { backgroundcolor: snap.color, opacity: 0.5 }
      : { backgroundcolor: "transparent", opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isActivTab ? "rounded-full glassmorhsim" : "rounded-4"
      }`}
      onClick={handleclick}
      style={activstyle}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </div>
  );
};

export default Tab;
