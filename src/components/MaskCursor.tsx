"use client";
import { useState } from "react";
import useMousePosition from "../app/utils/useMousePosition";
import { motion } from "framer-motion";

const maskStyle = "";

const MaskCursor = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 300 : 40;
  return (
    <div className="h-screen m-0 w-screen relative bg-black">
      <motion.div
        className={`p-0 m-0 mask absolute h-full w-full flex items-center justify-center text-[#afa18f] text-[60px] leading-[6px] cursor-default`}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Front End developer
        </p>
      </motion.div>
      <div className="h-full w-full flex items-center justify-center text-[#afa18f] text-[60px] leading-[6px] cursor-default">
        <p className="">Subhash Nayak</p>
      </div>
    </div>
  );
};

export default MaskCursor;
