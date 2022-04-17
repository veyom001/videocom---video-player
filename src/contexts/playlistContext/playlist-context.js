import { createContext, useReducer, useContext, useEffect } from "react";
import { setPlaylist } from "../../utilities/playlistsUtils";
import { useAuth } from "../auth-context";
import { playlistReducer } from "./playlistReducer";

const playlistContext = createContext(null);

const PlaylistProvider = ({ children }) => {
  const { authState } = useAuth();
  const { isAuth } = authState;
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlists: [],
  });
  useEffect(() => {
    if (!isAuth) return;
    (async () => {
      try {
        const data = await setPlaylist();
        playlistDispatch({ type: "SET_PLAYLIST", payload: data });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <playlistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </playlistContext.Provider>
  );
};

const usePlaylist = () => useContext(playlistContext);
export { usePlaylist, PlaylistProvider };
