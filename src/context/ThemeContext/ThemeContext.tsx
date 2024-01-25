import { ReactNode, createContext, useContext, useState } from "react";
import { ThemeContextType } from "./types";

const ThemeContext = createContext({} as ThemeContextType);

type Props = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
