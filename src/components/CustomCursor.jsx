import { useEffect, useState } from "react";

const CustomCursor = () => {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () =>
      window.removeEventListener("mousemove", moveCursor);

  }, []);

  return (
    <>
      {/* OUTER CURSOR */}
      <div
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 20}px, ${
            position.y - 20
          }px)`,
        }}
      />

      {/* INNER DOT */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x - 4}px, ${
            position.y - 4
          }px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;