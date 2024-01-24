import "./Chart.css";
import down from "../../assets/Arrow---Down-2.svg";
import { monthlyPrices, months, priceRanges } from "./constants";
import { addCommasToNumber } from "../../utils/addCommas";
import { Tooltip } from "react-tooltip";

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

          <div className="bars_container">
            {monthlyPrices.map((price) => {
              const highestPrice = 50000;
              const barHeight = (price / highestPrice) * 100;

              return (
                <div
                  key={price}
                  style={{ height: `${barHeight}%` }}
                  className="chart_bar"
                  data-tooltip-id={addCommasToNumber(price)}
                  data-tooltip-content={addCommasToNumber(price)}
                  data-tooltip-place="top"
                ></div>
              );
            })}

            <Tooltip anchorSelect=".chart_bar" />
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
