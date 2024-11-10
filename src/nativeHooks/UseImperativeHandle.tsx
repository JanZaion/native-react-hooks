import { useRef, useImperativeHandle, forwardRef } from "react";

export type CustomInputHandle = {
  focus: () => void;
  reset: () => void;
};

type CustomInputProps = {
  placeholder?: string;
};

// Create the child component using forwardRef
const CustomInput = forwardRef<CustomInputHandle, CustomInputProps>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      reset: () => {
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      },
    }));

    return (
      <input
        ref={inputRef}
        type="text"
        placeholder={props.placeholder}
      />
    );
  },
);

// Allows child components to expose specific methods/properties
// to parent components through refs
// Gives control over what the parent can access,
//  instead of exposing the entire DOM nodee
export const UseImperativeHandle = () => {
  const inputRef = useRef<CustomInputHandle>(null);

  const handleFocusClick = () => {
    inputRef.current?.focus();
  };

  const handleResetClick = () => {
    inputRef.current?.reset();
  };

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Type something..." />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleFocusClick}>Focus Input</button>
        <button
          onClick={handleResetClick}
          style={{ marginLeft: "10px" }}
        >
          Reset Input
        </button>
      </div>
    </div>
  );
};
