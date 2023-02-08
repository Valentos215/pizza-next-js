import React, { ReactNode, createContext, useState } from "react";

type TExpandProviderProps = { children: ReactNode };

export const ExpandContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => ""]);
export const ExpandProvider = ({ children }: TExpandProviderProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <ExpandContext.Provider value={[expanded, setExpanded]}>
      {children}
    </ExpandContext.Provider>
  );
};
