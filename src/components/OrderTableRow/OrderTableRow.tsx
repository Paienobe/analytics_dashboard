import "./OrderTableRow.css";
import { OrderTableRowProps } from "./types";
import invoice_icon from "../../assets/document-download.svg";

const OrderTableRow = ({
  amount,
  date,
  image,
  invoice,
  status,
  username,
}: OrderTableRowProps) => {
  const statusColors: { [x: string]: string } = {
    Refund: "#ED544E",
    Paid: "#34CAA5",
  };

  return (
    <div className="order_table_row">
      <div>
        <img src={image} alt="" />
        <p>{username}</p>
      </div>
      <div>
        <p>{date}</p>
      </div>
      <div>
        <p>{amount}</p>
      </div>
      <div>
        <p style={{ color: statusColors[status] }}>{status}</p>
      </div>
      <div>
        <a href={invoice} download>
          <img src={invoice_icon} alt="" /> View
        </a>
      </div>
    </div>
  );
};

export default OrderTableRow;
