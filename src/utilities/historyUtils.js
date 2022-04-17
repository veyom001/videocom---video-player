import axios from "axios";
import { history } from "./apiUrls";

const setHistory = async () => {
  try {
    const { data } = await axios.get(history, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return data.history;
  } catch (error) {
    console.error(error);
  }
};
const addToHistory = async (video, dispatch) => {
  try {
    const { data } = await axios.post(
      history,
      { video },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "ADD_TO_HISTORY", payload: data.history });
  } catch (error) {
    console.error(error);
  }
};
const removeFromHistory = async (id, dispatch) => {
  try {
    const { data } = await axios.delete(`${history}/${id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "REMOVE_FROM_HISTORY", payload: data.history });
  } catch (error) {
    console.error(error);
  }
};

const clearFullHistory = async (dispatch) => {
  try {
    const { data } = await axios.delete(`${history}/all`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "CLEAR_HISTORY", payload: data.history });
  } catch (error) {
    console.error(error);
  }
};
export { setHistory, addToHistory, removeFromHistory, clearFullHistory };
