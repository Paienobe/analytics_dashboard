import { v4 as uuid } from "uuid";

export const platforms = [
  {
    id: uuid(),
    name: "Book Bazaar",
    barColor: "#6160DC",
    progress: "54.2%",
    description: { amount: "$2,500,000", percentage: "+15%" },
  },
  {
    id: uuid(),
    name: "Artisan Aisle",
    barColor: "#54C5EB",
    progress: "45.2%",
    description: { amount: "$1,800,000", percentage: "+10%" },
  },
  {
    id: uuid(),
    name: "Toy Troop",
    barColor: "#FFB74A",
    progress: "27%",
    description: { amount: "$1,200,000", percentage: "+8%" },
  },
  {
    id: uuid(),
    name: "X Store",
    barColor: "#FF4A55",
    progress: "27%",
    description: { amount: "$600,000", percentage: "+5%" },
  },
];
