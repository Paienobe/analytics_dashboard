import "./Navbar.css";
import search from "../../assets/Icon - Search.svg";
import profile_img from "../../assets/Profile.svg";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import Calendar from "../SVGs/Calendar";
import Bell from "../SVGs/Bell";
import ArrowDown from "../SVGs/ArrowDown";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo.svg";
import { useGlobalContext } from "../../context/GlobalContext/GlobalContext";

const Navbar = () => {
  const { theme } = useThemeContext();
  const { showMenu, setShowMenu } = useGlobalContext();
  const iconColors: { [x: string]: string } = { light: "black", dark: "white" };
  return (
    <nav>
      <section>
        <img src={logo} className="nav_logo" />
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

      <div className="mobile_nav_section">
        <img src={profile_img} />
        <RxHamburgerMenu
          className="burger_btn"
          size={25}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
