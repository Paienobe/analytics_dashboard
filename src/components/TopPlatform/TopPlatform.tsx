import Platform from "../Platform/Platform";
import "./TopPlatform.css";
import { platforms } from "./constants";

const TopPlatform = () => {
  return (
    <section className="top_platform">
      <div>
        <p>Top Platform</p>
        <button>See All</button>
      </div>

      <div>
        {platforms.map((platform) => {
          return <Platform key={platform.id} {...platform} />;
        })}
      </div>
    </section>
  );
};

export default TopPlatform;
