import Bell from "../SVGs/Bell";
import Search from "../SVGs/Search";
import "./FloatingIcon.css";

const FloatingIcon = () => {
  return (
    <div className="floating_icon_parent">
      <div className="floating_icon">
        <Bell color="white" />
      </div>
      <div className="floating_icon">
        <Search />
      </div>
    </div>
  );
};

export default FloatingIcon;
