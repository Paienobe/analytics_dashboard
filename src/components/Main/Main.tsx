import "./Main.css";
import Chart from "../Chart/Chart";
import ActivityGridContainer from "../ActivityGridContainer/ActivityGridContainer";
import OrderTable from "../OrderTable/OrderTable";
import TopPlatform from "../TopPlatform/TopPlatform";
import FloatingIcon from "../FloatingBell/FloatingIcon";

const Main = () => {
  return (
    <main>
      <Chart />
      <ActivityGridContainer />
      <OrderTable />
      <TopPlatform />
      <FloatingIcon />
    </main>
  );
};

export default Main;
