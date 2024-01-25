import "./SideBar.css";
import logo from "../../assets/logo.svg";
import category from "../../assets/category.svg";
import trend from "../../assets/menu-up.svg";
import users from "../../assets/profile-2user.svg";
import box from "../../assets/box.svg";
import discount from "../../assets/discount-shape.svg";
import info from "../../assets/info-circle.svg";
import arrow from "../../assets/arrow-right.svg";
import settings from "../../assets/setting-2.svg";
import exit from "../../assets/logout.svg";
import Sun from "../SVGs/Sun";
import Moon from "../SVGs/Moon";
import { useRef, useState } from "react";
import Menu from "../SVGs/Menu";
import { toggleTheme } from "../../utils/themeToggles";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import { useGlobalContext } from "../../context/GlobalContext/GlobalContext";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useScroll } from "../../hooks/useScroll";

const items = [
  { name: "category", image: category },
  { name: "trend", image: trend },
  { name: "users", image: users },
  { name: "box", image: box },
  { name: "discount", image: discount },
  { name: "info", image: info },
];

const items2 = [
  { name: "arrow", image: arrow },
  { name: "settings", image: settings },
  { name: "exit", image: exit },
];

const SideBar = () => {
  const { theme, setTheme } = useThemeContext();
  const { showMenu } = useGlobalContext();
  const [selectedOption, setSelectedOption] = useState(items[0].name);

  const sideBarRef = useRef(null);

  const moonIconColors: { [x: string]: string } = {
    light: "#B2ABAB",
    dark: "white",
  };

  const sunIconColors: { [x: string]: string } = {
    light: "white",
    dark: "#B2ABAB",
  };

  useOutsideClick(sideBarRef, "burger_btn");
  useScroll();

  return (
    <aside className={showMenu ? "show_menu" : ""} ref={sideBarRef}>
      <section>
        <img src={logo} alt="" />

        <div>
          {items.map((item) => {
            return (
              <div
                key={item.name}
                className="button_parent"
                onClick={() => {
                  setSelectedOption(item.name);
                }}
              >
                {item.name == "category" ? (
                  <Menu color={theme == "light" ? "#0D062D" : "white"} />
                ) : (
                  <button
                    onClick={() => {
                      setSelectedOption(item.name);
                    }}
                  >
                    <img src={item.image} alt="" />
                  </button>
                )}

                {selectedOption == item.name && <span></span>}
              </div>
            );
          })}
        </div>

        <div>
          <button
            className={`${theme == "light" ? "selected_theme" : ""} theme_btn`}
            onClick={() => {
              setTheme("light");
              toggleTheme(false);
            }}
          >
            <Sun color={sunIconColors[theme]} />
          </button>

          <button
            className={`${theme == "dark" ? "selected_theme" : ""} theme_btn`}
            onClick={() => {
              setTheme("dark");
              toggleTheme(true);
            }}
          >
            <Moon color={moonIconColors[theme]} />
          </button>
        </div>
      </section>

      <section>
        {items2.map((item) => {
          return (
            <button key={item.name}>
              <img src={item.image} alt="" />
            </button>
          );
        })}
      </section>
    </aside>
  );
};

export default SideBar;
