import { useState, useCallback, memo } from "react";

// Expensive child component that we want to optimize
const ExpensiveChild = memo(
  ({ onItemClick }: { onItemClick: (item: string) => void }) => {
    return (
      <div>
        <h3>Expensive Child Component</h3>
        <button onClick={() => onItemClick("item-1")}>
          Click Item 1
        </button>
        <button onClick={() => onItemClick("item-2")}>
          Click Item 2
        </button>
      </div>
    );
  },
);

export const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState<string>("");

  // Without useCallback - this function would be
  // recreated on every render
  // causing ExpensiveChild to re-render unnecessarily
  // const handleItemClick = (item: string) => {
  //   setSelectedItem(item);
  // };

  // With useCallback - function reference remains
  // stable between renders
  const handleItemClick = useCallback((item: string) => {
    setSelectedItem(item);
    // Empty dependency array since we don't use any external values
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <p>Selected Item: {selectedItem}</p>

      <button onClick={() => setCount((c) => c + 1)}>
        Increment Count
      </button>

      <ExpensiveChild onItemClick={handleItemClick} />
    </div>
  );
};
