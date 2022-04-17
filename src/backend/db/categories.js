import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "ALL",
  },
  {
    _id: uuid(),
    categoryName: "GK",
  },
  {
    _id: uuid(),
    categoryName: "MUSIC",
  },
  {
    _id: uuid(),
    categoryName: "WEB DEV",
  },
  {
    _id: uuid(),
    categoryName: "AI",
  },
  {
    _id: uuid(),
    categoryName: "APP DEV",
  },
];
