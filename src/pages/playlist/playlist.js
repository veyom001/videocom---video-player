import { Link } from "react-router-dom";
import { Aside2 } from "../../components/aside type 2/aside2";
import { Aside } from "../../components/aside/aside";
import { mainContext } from "../../contexts/allContexts/main-context";
import { usePlaylist } from "../../contexts/playlistContext/playlist-context";
import { deleteSinglePlaylist } from "../../utilities/playlistsUtils";
import "./playlist.css";

const Playlist = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  const { playlists } = playlistState;
  const { hamburger } = mainContext();
  return (
    <>
      <main className="main-content">
        <div className="home-page">
          {hamburger ? (
            <Aside />
          ) : (
            <>
              <div className="aside-big">
                <Aside />
              </div>

              <div className="aside-small">
                <Aside2 />
              </div>
            </>
          )}
          <div className="content-column">
            <div className="playlist-heading">
              <h1>My playlist</h1>
            </div>
            <div className="all-playlist">
              {playlists.length ? (
                playlists.map((item) => (
                  <div className="playlist-card" key={item._id}>
                    <Link to={`${item._id}`}>
                      <div className="playlist-info">
                        <h3>{item.title}</h3>
                        <p>{`Total videos: ${item.videos.length}`}</p>
                      </div>
                    </Link>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="delete-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        onClick={() =>
                          deleteSinglePlaylist(item._id, playlistDispatch)
                        }
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                ))
              ) : (
                <h2>There is no playlist</h2>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { Playlist };
