import { Collaboration } from "@/components/Collaboration";
import MaskCursor from "@/components/MaskCursor";
import PixelCursor from "@/components/PixelCursor";
import React from "react";

const page = () => {
  return (
    // <div className="flex flex-col relative overflow-hidden">
    //   {/* <MaskCursor />
    //   <PixelCursor /> */}
    // </div>
    <div className="relative z-10 w-full overflow-x-clip">
      <Collaboration />
    </div>
  );
};

export default page;
