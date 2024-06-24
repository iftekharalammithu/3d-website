import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

const Custombutton = ({ title, handelClick, custonStyles, type }) => {
  const snap = useSnapshot(state);
  const generatestyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderwidth: "1px ",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 rounded-md flex-1 ${custonStyles}`}
      style={generatestyle(type)}
      onClick={handelClick}
    >
      {title}
    </button>
  );
};

export default Custombutton;
