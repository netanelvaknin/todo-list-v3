import React, { useState } from "react";

const useInputState = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const resetInput = () => {
    setValue("");
  };

  return [value, handleChange, resetInput];
};

export default useInputState;
