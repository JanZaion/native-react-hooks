import { useState, useMemo, useEffect } from "react";
import { getRandomWholeNumber } from "../utils/getRandomWholeNumber";

export const UseMemo = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [memoizedResult, setMemoizedResult] = useState<number | null>(
    null,
  );
  const [memoizedExecutionTime, setMemoizedExecutionTime] = useState<
    number | null
  >(null);
  const [nonMemoizedResult, setNonMemoizedResult] = useState<
    number | null
  >(null);
  const [nonMemoizedExecutionTime, setNonMemoizedExecutionTime] =
    useState<number | null>(null);
  const [expensiveFunctionStatus, setExpensiveFunctionStatus] =
    useState("Idle");

  // Very expensive function
  const expensiveFunction = (number: number) => {
    setExpensiveFunctionStatus("Running...");

    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += number;
    }

    return result;
  };

  // Memoized result
  const memoizedValue = useMemo(
    () => expensiveFunction(randomNumber),
    [randomNumber],
  );

  const handleMemoizedClick = () => {
    const start = performance.now();
    setMemoizedResult(memoizedValue);
    const end = performance.now();
    setMemoizedExecutionTime(end - start);
    setExpensiveFunctionStatus("Idle");
  };

  const handleNonMemoizedClick = () => {
    const start = performance.now();
    setNonMemoizedResult(expensiveFunction(randomNumber));
    const end = performance.now();
    setNonMemoizedExecutionTime(end - start);
  };

  const handleMakeRandomNumber = () =>
    setRandomNumber(getRandomWholeNumber);

  return (
    <div>
      <h1>Some number: {randomNumber}</h1>
      <button onClick={handleMakeRandomNumber}>Generate</button>
      <button onClick={handleMemoizedClick}>
        Call Memoized Function
      </button>
      <button onClick={handleNonMemoizedClick}>
        Call Non-Memoized Function
      </button>
      <div>
        <p>
          Expensive Function Status:{" "}
          <strong>{expensiveFunctionStatus}</strong>
        </p>
        <p>Memoized Result: {memoizedResult}</p>
        <p>
          Memoized Execution Time:{" "}
          <strong>{memoizedExecutionTime} ms</strong>
        </p>
        <p>Non-Memoized Result: {nonMemoizedResult}</p>
        <p>
          Non-Memoized Execution Time:{" "}
          <strong>{nonMemoizedExecutionTime} ms</strong>
        </p>
      </div>
    </div>
  );
};
