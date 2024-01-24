import "./Platform.css";
import { PlatformProps } from "./types";

const Platform = ({ barColor, description, name, progress }: PlatformProps) => {
  return (
    <div className="platform">
      <p>{name}</p>

      <div className="platform_progress">
        <div style={{ backgroundColor: barColor, width: progress }}></div>
      </div>

      <div>
        <p>{description.amount}</p>
        <p>{description.percentage}</p>
      </div>
    </div>
  );
};

export default Platform;
