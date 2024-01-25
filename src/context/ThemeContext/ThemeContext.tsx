import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeContextType } from "./types";

const ThemeContext = createContext({} as ThemeContextType);

type Props = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: Props) => {
  const storedTheme = localStorage.getItem("dashboard_theme");

  const [theme, setTheme] = useState(storedTheme || "light");

  useEffect(() => {
    localStorage.setItem("dashboard_theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
