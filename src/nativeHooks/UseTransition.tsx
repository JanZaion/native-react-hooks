import { useState, useTransition } from "react";
import { expensiveFunction } from "../utils/expensiveFunction";

// Useful for state transitions that take a long time.
// Basically a suspense for useState.
export const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(1);

  const handleClick = () => {
    startTransition(() => {
      setCount((prevCount) => expensiveFunction(prevCount));
    });
  };

  return (
    <div>
      {isPending ? <h1>Loading...</h1> : <h1>Count: {count}</h1>}
      <button onClick={handleClick}>Make Big Number</button>
    </div>
  );
};
