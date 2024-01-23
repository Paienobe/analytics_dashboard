import "./SideBar.css";
import logo from "../../assets/logo.svg";
import category from "../../assets/category.svg";
import trend from "../../assets/trend-up.svg";
import users from "../../assets/profile-2user.svg";
import box from "../../assets/box.svg";
import discount from "../../assets/discount-shape.svg";
import info from "../../assets/info-circle.svg";
import arrow from "../../assets/arrow-right.svg";
import settings from "../../assets/setting-2.svg";
import exit from "../../assets/logout.svg";
import Sun from "../SVGs/Sun";
import Moon from "../SVGs/Moon";

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
  return (
    <aside>
      <section>
        <img src={logo} alt="" />
        <div>
          {items.map((item) => {
            return (
              <button key={item.name}>
                <img src={item.image} alt="" />
              </button>
            );
          })}
        </div>

        <div>
          <div className="selected_theme">
            <Sun color="white" />
          </div>

          <div>
            <Moon color="#B2ABAB" />
          </div>
        </div>
      </section>

      <section>
        {items2.map((item) => {
          return <img key={item.name} src={item.image} alt="" />;
        })}
      </section>
    </aside>
  );
};

export default SideBar;
