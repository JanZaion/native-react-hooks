import { useState } from "react";
import { getRandomWholeNumber } from "../utils/getRandomWholeNumber";

// Use this pattern with the props
// if you neet to react on a value from a previous render.
const CountLabel = ({ count }: { count: number }) => {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState("Go, number!");

  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? "Number go up" : "Number go down");
  }

  return (
    <>
      <h1>{count}</h1>
      {trend && <p>{trend}</p>}
    </>
  );
};

export const UseState = () => {
  // Initialize with a callback instead of a call saves perf.
  // The function does not run on rerender.
  const [number, setNumber] = useState(getRandomWholeNumber);
  const [resetKey, setResetKey] = useState(0);

  // Previous state with a callback ensures the correct value.
  // We don't wait for the next render to update the state.
  const increment = () =>
    setNumber((previousNumber) => previousNumber + 1);
  const decrement = () =>
    setNumber((previousNumber) => previousNumber - 1);

  // Changing the key of the component
  // will reset the component to it's initial state.
  const reset = () => {
    setResetKey(getRandomWholeNumber);
    setNumber(getRandomWholeNumber);
  };

  return (
    <>
      <CountLabel key={resetKey} count={number} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
