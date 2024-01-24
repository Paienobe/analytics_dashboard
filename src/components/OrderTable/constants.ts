import user1 from "../../assets/user1.svg";
import user2 from "../../assets/user2.svg";
import user3 from "../../assets/user3.svg";
import user4 from "../../assets/user4.svg";
import user5 from "../../assets/user5.svg";
import invoice from "../../assets/invoice.pdf";

import { v4 as uuid } from "uuid";

export const orders = [
  {
    id: uuid(),
    username: "Marcus Bergson",
    image: user1,
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
    invoice: invoice,
  },
  {
    id: uuid(),
    username: "Jaydon Vaccaro",
    image: user2,
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
    invoice: invoice,
  },
  {
    id: uuid(),
    username: "Corey Schleifer",
    image: user3,
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
    invoice: invoice,
  },
  {
    id: uuid(),
    username: "Cooper Press",
    image: user4,
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
    invoice: invoice,
  },
  {
    id: uuid(),
    username: "Phillip Lubin",
    image: user5,
    date: "Nov 13, 2023",
    amount: "$78,000",
    status: "Paid",
    invoice: invoice,
  },
];
