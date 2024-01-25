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
import { useState } from "react";
import Menu from "../SVGs/Menu";
import { toggleTheme } from "../../utils/themeToggles";

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
  const [selectedOption, setSelectedOption] = useState(items[0].name);
  const [theme, setTheme] = useState("light");

  return (
    <aside>
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
                  <Menu />
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
            <Sun color={theme == "dark" ? "#B2ABAB" : "white"} />
          </button>

          <button
            className={`${theme == "dark" ? "selected_theme" : ""} theme_btn`}
            onClick={() => {
              setTheme("dark");
              toggleTheme(true);
            }}
          >
            <Moon color={theme == "dark" ? "white" : "#B2ABAB"} />
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
