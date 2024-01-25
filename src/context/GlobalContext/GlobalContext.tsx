import { ReactNode, createContext, useContext, useState } from "react";
import { GlobalContextType } from "./types";

export const GlobalContext = createContext({} as GlobalContextType);

type Props = {
  children: ReactNode;
};

export const GlobalContextProvider = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <GlobalContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
