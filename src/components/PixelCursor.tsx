"use client";
import React from "react";

const PixelCursor = () => {
  const getBlocks = () => {
    const blockSize = window.innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerWidth / blockSize);
    return [...Array(nbOfBlocks)].map((_, index) => {
      return (
        <div
          onMouseEnter={colorize}
          key={`b-${index}`}
          className="block w-full h-[5vw]  "
        ></div>
      );
    });
  };

  const colorize = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.target as HTMLDivElement).style.backgroundColor = "black";
    setTimeout(() => {
      (e.target as HTMLDivElement).style.backgroundColor = "transparent";
    }, 500);
  };
  return (
    <main className="main flex h-screen items-center justify-center relative bg-white">
      <div className="body w-[70%] uppercase text-[6vw] font-[700] text-center mix-blend-difference text-white z-10 pointer-events-none ">
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <div className="gri absolute w-full h-full flex">
        {[...Array(20)].map((_, index) => {
          return (
            <div key={index + 1} className="column w-[5vw] h-full  ">
              {getBlocks()}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default PixelCursor;
