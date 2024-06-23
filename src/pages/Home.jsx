import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headTextAnimation,
  headContentAnimation,
  headContainerAnimation,
  slideAnimation,
  fadeAnimation,
} from "../config/motion.js";
import state from "../store/index.jsx";
import { Custombutton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="hidden xl:block" /> DO IT
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-base text-gray-600">
                Create your unique and exclusive shirt with our brand new 3D
                Customization tool <strong>unleash your imagination </strong>{" "}
                and defind your own style.
              </p>
              <Custombutton
                type="filled"
                title="Customize It"
                handelClick={() => (state.intro = false)}
                custonStyles="w-fit px-4 py-2.5 font-bold text-sm"
              ></Custombutton>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
