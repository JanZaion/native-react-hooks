import { ChangeEvent, useRef, useState } from "react";

// useRef is a hook that returns a mutable ref object.
// Ideal for storing value that is independent of the rendering.
export const UseRef = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const [timeStampedText, setTimeStampedText] = useState<
    string | number
  >("");
  const intervalRef = useRef<number | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
    handleFocus();
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const storeTime = (event: ChangeEvent<HTMLInputElement>) =>
    setTimeStampedText(
      `${secondsPassed.toFixed(3)} 
      is the time when you wrote: ${event.target.value}`,
    );

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <input
        ref={inputRef}
        onChange={storeTime}
        type="string"
        placeholder="Mess with the time!"
      />
      <div>{timeStampedText}</div>
    </>
  );
};
