import axios from "axios";
import { playlist } from "./apiUrls";

const setPlaylist = async () => {
  try {
    const { data } = await axios.get(playlist, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    return data.playlists;
  } catch (error) {
    console.error(error);
  }
};

const addSinglePlaylist = async (singlPlaylist, video, playlistDispatch) => {
  try {
    const { data } = await axios.post(
      playlist,
      {
        playlist: singlPlaylist,
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    playlistDispatch({ type: "ADD_SINGLE_PLAYLIST", payload: data.playlists });
    await postSingleVideoInAPlaylist(
      data.playlists[data.playlists.length - 1]._id,
      video,
      playlistDispatch
    );
  } catch (error) {
    console.error(error);
  }
};

const deleteSinglePlaylist = async (playlistId, playlistDispatch) => {
  try {
    const { data } = await axios.delete(`${playlist}/${playlistId}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    playlistDispatch({
      type: "DELETE_SINGLE_PLAYLIST",
      payload: data.playlists,
    });
  } catch (error) {
    console.error(error);
  }
};

const getSinglePlaylistData = async (playlistId) => {
  try {
    const { data } = await axios.get(`${playlist}/${playlistId}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });

    return data.playlist;
  } catch (error) {
    console.error(error);
  }
};

const postSingleVideoInAPlaylist = async (
  playlistId,
  video,
  playlistDispatch
) => {
  try {
    const { data } = await axios.post(
      `${playlist}/${playlistId}`,
      { video },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    playlistDispatch({
      type: "ADD_SINGLE_VIDEO_TO_PLAYLIST",
      payload: data.playlist,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteVideoInPlaylist = async (playlistId, videoId, playlistDispatch) => {
  try {
    const { data } = await axios.delete(
      `${playlist}/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    playlistDispatch({
      type: "DELETE_SINGLE_VIDEO_FROM_PLAYLIST",
      payload: data.playlist,
    });
  } catch (error) {
    console.error(error);
  }
};
export {
  setPlaylist,
  addSinglePlaylist,
  deleteSinglePlaylist,
  getSinglePlaylistData,
  postSingleVideoInAPlaylist,
  deleteVideoInPlaylist,
};
