import "./Navbar.css";
import search from "../../assets/Icon - Search.svg";
import profile_img from "../../assets/Profile.svg";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import Calendar from "../SVGs/Calendar";
import Bell from "../SVGs/Bell";
import ArrowDown from "../SVGs/ArrowDown";

const Navbar = () => {
  const { theme } = useThemeContext();
  const iconColors: { [x: string]: string } = { light: "black", dark: "white" };
  return (
    <nav>
      <section>
        <p>Dashboard</p>

        <div>
          <img src={search} alt="" />
          <input type="text" placeholder="Search..." />
        </div>
      </section>

      <section>
        <div>
          <Calendar color={iconColors[theme]} />
          November 15, 2023
          <div>
            <Bell color={iconColors[theme]} />
          </div>
        </div>

        <div>
          <img src={profile_img} alt="" />
          <div>
            <p>Justin Bergson</p>
            <p>Justin@gmail.com</p>
          </div>
          <ArrowDown color={iconColors[theme]} />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
