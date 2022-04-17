import axios from "axios";
import { categories } from "./apiUrls";
const setCategories = async () => {
  try {
    const { data } = await axios.get(categories);
    return data.categories;
  } catch (error) {
    console.error(error);
  }
};

export { setCategories };
