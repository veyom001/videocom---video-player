import axios from "axios";
import { likes } from "./apiUrls";

const setLikes = async () => {
  try {
    const { data } = await axios.get(likes, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return data.likes;
  } catch (error) {
    console.error(error);
  }
};

const addToLikes = async (video, dispatch) => {
  try {
    const { data } = await axios.post(
      likes,
      { video },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "ADD_TO_LIKES", payload: data.likes });
  } catch (error) {
    console.error(error);
  }
};

const removeFromLikes = async (id, dispatch) => {
  try {
    const { data } = await axios.delete(`${likes}/${id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "REMOVE_FROM_LIKES", payload: data.likes });
  } catch (error) {
    console.error(error);
  }
};
export { setLikes, addToLikes, removeFromLikes };
