import React from "react";
import Custombutton from "./Custombutton";

const Filepicker = ({ file, setfile, readfile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image"
          onChange={(e) => {
            setfile(e.target.files[0]);
          }}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-600 truncate text-xs">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 ">
        <Custombutton
          type="outline"
          title="Logo"
          handelClick={() => {
            readfile("logo");
          }}
          custonStyles="text-xs"
        ></Custombutton>
        <Custombutton
          type="filled"
          title="Full"
          handelClick={() => {
            readfile("full");
          }}
          custonStyles="text-xs"
        ></Custombutton>
      </div>
    </div>
  );
};

export default Filepicker;
