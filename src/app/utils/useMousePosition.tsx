import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
    return () => {
      window.removeEventListener("mousemove", (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
  }, []);
  return mousePosition;
};

export default useMousePosition;
