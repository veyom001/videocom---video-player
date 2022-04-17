const playlistReducer = (playlistState, playlistAction) => {
  const { payload } = playlistAction;
  let playlists = playlistState.playlists;
  switch (playlistAction.type) {
    case "SET_PLAYLIST":
      return { ...playlistState, playlists: playlistAction.payload };

    case "ADD_SINGLE_PLAYLIST":
      return { ...playlistState, playlists: playlistAction.payload };

    case "DELETE_SINGLE_PLAYLIST":
      return { ...playlistState, playlists: playlistAction.payload };

    case "DELETE_SINGLE_VIDEO_FROM_PLAYLIST":
      playlists = playlists.filter((item) => item._id !== payload._id);
      playlists = [...playlists, payload];
      return { ...playlistState, playlists: [...playlists] };

    case "ADD_SINGLE_VIDEO_TO_PLAYLIST":
      playlists = playlists.filter((item) => item._id !== payload._id);
      playlists = [...playlists, payload];
      return { ...playlistState, playlists: [...playlists] };

    default:
      return playlistState;
  }
};

export { playlistReducer };
