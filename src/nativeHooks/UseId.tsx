import { useId, useState } from "react";

// Generates a unique id that is consistent across renders.
export const UseId = () => {
  const id = useId();
  const [color, setColor] = useState("#000000");

  const generateRandomColor = () => {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div>
      <div>
        <h1
          style={{
            padding: "20px",
            backgroundColor: color,
            color: "white",
            marginBottom: "10px",
          }}
        >
          id: {id}
        </h1>
        <p>Current color: {color}</p>
      </div>
      <button onClick={generateRandomColor}>
        Generate New Color
      </button>
    </div>
  );
};
