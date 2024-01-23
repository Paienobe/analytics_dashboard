import "./Navbar.css";
import search from "../../assets/Icon - Search.svg";
import calendar from "../../assets/calendar.svg";
import bell from "../../assets/solar_bell-outline.svg";
import profile_img from "../../assets/Profile.svg";
import down from "../../assets/Arrow---Down-2.svg";

const Navbar = () => {
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
          <img src={calendar} alt="" />
          November 15, 2023
          <div>
            <img src={bell} alt="" />
          </div>
        </div>

        <div>
          <img src={profile_img} alt="" />
          <div>
            <p>Justin Bergson</p>
            <p>Justin@gmail.com</p>
          </div>
          <img src={down} alt="" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
