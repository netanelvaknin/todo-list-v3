import React from "react";

type rootContextType =
  | {
      error: string;
      setError: (error: string) => void;
    }
  | undefined;
export default React.createContext<rootContextType>(undefined);
