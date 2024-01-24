import "./ActivityTile.css";
import { ActivityTileProp } from "./types";
import up_arrow from "../../assets/trend-up.svg";
import down_arrow from "../../assets/trending-down.svg";

const ActivityTile = ({
  icon,
  isCurrency,
  isUp,
  value,
  sparkLine,
  title,
}: ActivityTileProp) => {
  return (
    <div className="activity_tile">
      <div>
        <div>
          <img src={icon} alt="" />
        </div>

        <img src={sparkLine} alt="" />
      </div>
      <p>{title}</p>
      <p>
        {isCurrency && "$"}
        {value}
      </p>
      <div>
        <div className={isUp ? "up_trend" : "down_trend"}>
          <img src={isUp ? up_arrow : down_arrow} alt="" />
          23.5%
        </div>
        vs. previous month
      </div>
    </div>
  );
};

export default ActivityTile;
