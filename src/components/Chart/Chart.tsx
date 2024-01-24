import "./Chart.css";
import down from "../../assets/Arrow---Down-2.svg";
import { months, priceRanges } from "./constants";
import { addCommasToNumber } from "../../utils/addCommas";

const Chart = () => {
  return (
    <section className="chart">
      <div>
        <p>Sales Trends</p>

        <div>
          <p>Sort by : </p>
          <button>
            Monthly <img src={down} alt="" />
          </button>
        </div>
      </div>

      <div className="chart_main">
        <div className="range_holder">
          {priceRanges.map((range) => {
            return <p key={range}>{addCommasToNumber(range)}</p>;
          })}
        </div>

        <div className="bar_holder">
          <div>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
        </div>

        <div className="month_holder">
          {months.map((month) => {
            return <p key={month}>{month}</p>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Chart;
