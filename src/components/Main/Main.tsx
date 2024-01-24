import "./Main.css";
import Chart from "../Chart/Chart";
import ActivityGridContainer from "../ActivityGridContainer/ActivityGridContainer";
import OrderTable from "../OrderTable/OrderTable";
import TopPlatform from "../TopPlatform/TopPlatform";

const Main = () => {
  return (
    <main>
      <Chart />
      <ActivityGridContainer />
      <OrderTable />
      <TopPlatform />
    </main>
  );
};

export default Main;
