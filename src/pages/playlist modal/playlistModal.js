import { useState } from "react";
import { usePlaylist } from "../../contexts/playlistContext/playlist-context";
import {
  addSinglePlaylist,
  deleteVideoInPlaylist,
  postSingleVideoInAPlaylist,
} from "../../utilities/playlistsUtils";

import "./playlistModal.css";

const PlaylistModal = ({ setModal, video }) => {
  const [playlistInfo, setPlaylistInfo] = useState({
    title: "",
    description: "",
  });
  const { playlistState, playlistDispatch } = usePlaylist();
  const { playlists } = playlistState;

  return (
    <>
      <div className="set-background-color">
        <div className="confirmation-dialog">
          <div className="confirmation-dialog-content">
            <h2>Create Playlist</h2>
            <ul>
              {playlists &&
                playlists.map((item) => {
                  let isVideoInPlaylist = item.videos.some(
                    (i_video) => i_video._id === video._id
                  );

                  return (
                    <li key={item._id}>
                      <input
                        type="checkbox"
                        defaultChecked={isVideoInPlaylist}
                        onChange={(e) => {
                          if (e.target.checked) {
                            postSingleVideoInAPlaylist(
                              item._id,
                              video,
                              playlistDispatch
                            );
                          } else {
                            deleteVideoInPlaylist(
                              item._id,
                              video._id,
                              playlistDispatch
                            );
                          }
                        }}
                      />
                      <label className="set-label-inline">{item.title}</label>
                    </li>
                  );
                })}
            </ul>
            <div className="playlist-input">
              <label>Playlist Name</label>
              <input
                type="text"
                placeholder="playlist name"
                value={playlistInfo.title}
                onChange={(e) =>
                  setPlaylistInfo({ ...playlistInfo, title: e.target.value })
                }
              />
              <label>Description</label>
              <input
                type="text"
                placeholder="Description"
                value={playlistInfo.description}
                onChange={(e) =>
                  setPlaylistInfo({
                    ...playlistInfo,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="confirmation-dialog-buttons">
              <button
                className="primary-button"
                onClick={() => {
                  addSinglePlaylist(playlistInfo, video, playlistDispatch);
                  setModal(false);
                }}
              >
                Create Playlist
              </button>
              <button
                className="secondary-button"
                onClick={() => setModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PlaylistModal };
