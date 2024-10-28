import { KeyboardEvent, useRef, useState } from "react";

// useRef is a hook that returns a mutable ref object.
// Ideal for storing value that is independent of the rendering.
export const UseRef = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const [storedTimes, setStoredTimes] = useState<(number | string)[]>(
    [],
  );
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

  const storeTime = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setStoredTimes((prevStoredTimes) => [
        ...prevStoredTimes,
        `${secondsPassed.toFixed(1)}
         ${(event.target as HTMLInputElement).value}`,
      ]);
    }
  };

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(1)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      {/* Or use ref to reference a DOM node */}
      <input
        ref={inputRef}
        type="string"
        placeholder="Add a timestamp!"
        onKeyUp={storeTime}
      />
      <div>
        {storedTimes.map((time) => (
          <p key={time}>{time}</p>
        ))}
      </div>
    </>
  );
};
