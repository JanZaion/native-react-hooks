import { useInsertionEffect, useState } from "react";

// useInsertionEffect runs before any DOM mutations
// useful for CSS-in-JS libraries like styled-components
export const UseInsertionEffect = () => {
  const [isHotPink, setIsHotPink] = useState(false);

  useInsertionEffect(() => {
    // Create dynamic style tag
    const style = document.createElement("style");
    style.innerHTML = `
      .dynamic-box {
        width: 200px;
        height: 200px;
        background-color: ${isHotPink ? "hotPink" : "blue"};
        transition: background-color 0.3s;
        margin-bottom: 10px;
      }
    `;

    // Insert style into document head
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [isHotPink]);

  const handleHotPink = () => setIsHotPink((prev) => !prev);

  return (
    <div>
      <div className="dynamic-box"></div>
      <button onClick={handleHotPink}>Toggle Color</button>
    </div>
  );
};
