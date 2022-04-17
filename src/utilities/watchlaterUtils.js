import { watchlater } from "./apiUrls";
import axios from "axios";

const setWatchlater = async () => {
  try {
    const { data } = await axios.get(watchlater, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return data.watchlater;
  } catch (error) {
    console.error(error);
  }
};

const addToWatchlater = async (video, dispatch) => {
  try {
    const { data } = await axios.post(
      watchlater,
      { video },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "ADD_TO_WATCHLATER", payload: data.watchlater });
  } catch (error) {
    console.error(error);
  }
};

const removeFromWatchlater = async (id, dispatch) => {
  try {
    const { data } = await axios.delete(`${watchlater}/${id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "REMOVE_FROM_WATCHLATER", payload: data.watchlater });
  } catch (error) {
    console.error(error);
  }
};
export { setWatchlater, addToWatchlater, removeFromWatchlater };
