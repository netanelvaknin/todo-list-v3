import React, { useState } from "react";
import RootContext from "./rootContext";

interface RootStateProps {
  children?: React.ReactNode;
}

export const RootState = (props: RootStateProps) => {
  const [error, setError] = useState("");

  return (
    <RootContext.Provider
      value={{
        error,
        setError,
      }}
    >
      {props.children}
    </RootContext.Provider>
  );
};

export default RootState;
