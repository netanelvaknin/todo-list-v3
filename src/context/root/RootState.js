import React, { useState } from "react";
import RootContext from "./rootContext";

export const RootState = ({ children }) => {
  const [error, setError] = useState("");

  return (
    <RootContext.Provider
      value={{
        error,
        setError,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export default RootState;
