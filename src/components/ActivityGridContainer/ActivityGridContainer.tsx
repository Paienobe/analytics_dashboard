import "./ActivityGridContainer.css";
import greenSparkline from "../../assets/up_sparkline.svg";
import redSparkline from "../../assets/down_sparkline.svg";
import boxCheck from "../../assets/box-tick.svg";
import rotate from "../../assets/3d-rotate.svg";
import shopping from "../../assets/shopping-cart.svg";
import coin from "../../assets/coin.svg";
import ActivityTile from "../ActivityTile/ActivityTile";

const activities = [
  {
    title: "Total Order",
    value: "350",
    isUp: true,
    isCurrency: false,
    sparkLine: greenSparkline,
    icon: boxCheck,
  },
  {
    title: "Total Refund",
    value: "270",
    isUp: false,
    isCurrency: false,
    sparkLine: redSparkline,
    icon: rotate,
  },
  {
    title: "Average Sales",
    value: "1567",
    isUp: true,
    isCurrency: false,
    sparkLine: greenSparkline,
    icon: shopping,
  },
  {
    title: "Total Income",
    value: "350.00",
    isUp: true,
    isCurrency: true,
    sparkLine: greenSparkline,
    icon: coin,
  },
];

const ActivityGridContainer = () => {
  return (
    <section className="activity_grid">
      {activities.map((activity) => {
        return <ActivityTile key={activity.title} {...activity} />;
      })}
    </section>
  );
};

export default ActivityGridContainer;
