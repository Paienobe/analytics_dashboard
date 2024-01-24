import "./Main.css";
import Chart from "../Chart/Chart";
import ActivityGridContainer from "../ActivityGridContainer/ActivityGridContainer";
import OrderTable from "../OrderTable/OrderTable";

const Main = () => {
  return (
    <main>
      <Chart />
      <ActivityGridContainer />
      <OrderTable />
    </main>
  );
};

export default Main;
