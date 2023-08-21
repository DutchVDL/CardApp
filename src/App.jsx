/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "./App.css";

import Logo from "./img/logo.svg";
import Nike from "./img/nike.png";

import { useMotionValue, useTransform, motion } from "framer-motion";

function App() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -10]);
  const rotateY = useTransform(x, [-100, 100], [30, -10]);
  const colors = [
    { value: "#b6a179" },
    { value: "#272425" },
    { value: "#6389cb" },
    { value: "#f2c758" },
    { value: "#ffffff" },
  ];

  return (
    <div className="w-full bg-[#b1a29d] h-screen flex items-center justify-center">
      <div style={{ perspective: 2000 }}>
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          whileTap={{ cursor: "grabbing" }}
          dragElastic={0.18}
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          className="w-[426px] min-h-[600px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative"
        >
          <div className="mb-6">
            <img src={Logo} alt="" />
          </div>

          <h1 className="text-5xl mb-6 font-extrabold">Nike Air Max Pre-Day</h1>

          <p className="max-w-[300px] text-[#000000] mb-6">
            Taking the classic looh of heritage Running into new realm, the Nike
            Air Max Pre-Day brings you a fast-placed look that's ready for
            today's world.
          </p>

          <div className="flex items-center gap-x-[20px] mb-12">
            <button className="bg-[#2d2b2c] text-white text-base font-mediu py-[16px] px-[40px] rounded-lg">
              Add to Bag
            </button>
            <div className="text-[24px] font-bold text-[#000000]">$495.00</div>
          </div>

          <ul className="flex gap-x-[10px]">
            {colors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color.value }}
                className="w-8 h-8 rounded-full cursor-pointer"
              ></li>
            ))}
          </ul>
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100000 }}
            className="absolute top-12 -right-64 w-[620px]"
          >
            <img src={Nike} draggable="false" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
