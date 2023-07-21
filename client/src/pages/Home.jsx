import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import { headContainerAnimation, slideAnimation } from "../config/motion";

import state from "../store";
import CustomButton from "../components/CustomButton";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./three.js"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div>
              <h1 className="head-text">
                LETS <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContainerAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                Customization toll, <strong>Unleash your imigation</strong>{" "}
                define your own style
              </p>

              <CustomButton
                type="filled"
                title="Customize IT"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
