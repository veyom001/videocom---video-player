import { createContext, useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import { setCategories } from "../../utilities/categoriesUtils";
import { setHistory } from "../../utilities/historyUtils";
import { setLikes } from "../../utilities/likesUtils";
import { setVideos } from "../../utilities/videosUtils";
import { setWatchlater } from "../../utilities/watchlaterUtils";
import { useAuth } from "../auth-context";
import { reducerFunction } from "./reducerFunction";
const context = createContext(null);

const ContextProvider = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);
  const [state, dispatch] = useReducer(reducerFunction, {
    allVideos: [],
    allCategories: [],
    likes: [],
    dislikes: [],
    watchlater: [],
    history: [],
  });
  const { authState } = useAuth();
  const { isAuth } = authState;

  useEffect(() => {
    (async () => {
      const data = await setVideos();
      dispatch({ type: "SET_VIDEOS", payload: data });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await setCategories();
      dispatch({ type: "SET_CATEGORIES", payload: data });
    })();
  }, []);

  useEffect(() => {
    if (!isAuth) return;
    (async () => {
      const data = await setLikes();
      dispatch({ type: "SET_LIKES", payload: data });
    })();
  }, [isAuth]);

  useEffect(() => {
    if (!isAuth) return;
    (async () => {
      const data = await setWatchlater();
      dispatch({ type: "SET_WATCHLATER", payload: data });
    })();
  }, [isAuth]);

  useEffect(() => {
    if (!isAuth) return;
    (async () => {
      const data = await setHistory();
      dispatch({ type: "SET_HISTORY", payload: data });
    })();
  }, [isAuth]);

  return (
    <context.Provider value={{ state, dispatch, hamburger, setHamburger }}>
      {children}
    </context.Provider>
  );
};

const mainContext = () => useContext(context);

export { ContextProvider, mainContext };
