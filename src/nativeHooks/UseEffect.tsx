import { useEffect, useState } from "react";

// An "escape hatch" from React, allows interaction
// with outside systems. The window api in this case.
export const UseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          width: "20px",
          height: "20px",
          borderRadius: "10%",
          backgroundColor: "#ae3aae",
          pointerEvents: "none",
          transition: "all 0.1s ease",
          zIndex: 9999,
        }}
      />
      <h2>Mouse Position:</h2>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </div>
  );
};
