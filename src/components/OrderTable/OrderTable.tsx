import OrderTableRow from "../OrderTableRow/OrderTableRow";
import "./OrderTable.css";
import { orders } from "./constants";

const OrderTable = () => {
  return (
    <section className="order_table">
      <div>
        <p>Last Orders</p>
        <button>See All</button>
      </div>

      <div className="table_head">
        <p>Name</p>
        <p>Date</p>
        <p>Amount</p>
        <p>Status</p>
        <p>Invoice</p>
      </div>

      <div>
        {orders.map((order) => {
          return <OrderTableRow key={order.id} {...order} />;
        })}
      </div>
    </section>
  );
};

export default OrderTable;
