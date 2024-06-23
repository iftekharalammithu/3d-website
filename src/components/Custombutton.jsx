import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";

const Custombutton = ({ title, handelClick, custonStyles, type }) => {
  const snap = useSnapshot(state);
  const generatestyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "white",
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
