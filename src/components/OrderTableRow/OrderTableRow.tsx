import "./OrderTableRow.css";
import { OrderTableRowProps } from "./types";
import Download from "../SVGs/Download";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";

const OrderTableRow = ({
  amount,
  date,
  image,
  invoice,
  status,
  username,
}: OrderTableRowProps) => {
  const { theme } = useThemeContext();
  const statusColors: { [x: string]: string } = {
    Refund: "#ED544E",
    Paid: "#34CAA5",
  };
  const iconColors: { [x: string]: string } = { light: "black", dark: "white" };

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
          <Download color={iconColors[theme]} />
          View
        </a>
      </div>
    </div>
  );
};

export default OrderTableRow;
