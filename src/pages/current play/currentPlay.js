import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./currentPlay.css";
import { mainContext } from "../../contexts/allContexts/main-context";
import { addToLikes, removeFromLikes } from "../../utilities/likesUtils";
import { useAuth } from "../../contexts/auth-context";
import {
  addToWatchlater,
  removeFromWatchlater,
} from "../../utilities/watchlaterUtils";
import { addToHistory } from "../../utilities/historyUtils";
import { PlaylistModal } from "../playlist modal/playlistModal";
import { Aside2 } from "../../components/aside type 2/aside2";
import { Aside } from "../../components/aside/aside";

const CurrentPlay = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loader, setLoader] = useState(false);
  const { state, dispatch, hamburger } = mainContext();
  const { authState } = useAuth();
  const { isAuth } = authState;
  const { allVideos, likes, dislikes, watchlater } = state;

  let recommendVideos;
  if (currentVideo) {
    recommendVideos = allVideos.filter(
      (video) =>
        video.categoryName === currentVideo.categoryName &&
        video._id !== currentVideo._id
    );
  }

  useEffect(() => {
    (async (videoId) => {
      try {
        setLoader(true);
        const { data } = await axios.get(`/api/video/${videoId}`);
        setLoader(false);
        setCurrentVideo(data.video);
      } catch (error) {
        console.error(error);
      }
    })(videoId);
  }, [videoId]);
  return (
    <>
      {loader && (
        <img
          className="loading-image"
          src="https://res.cloudinary.com/dbfzfqfhl/image/upload/v1648755213/ecom%20item%20images/video%20library%20data/loading_vja82z.gif"
        />
      )}
      {currentVideo && (
        <main className="main-content">
          <div className="home-page">
            {hamburger ? (
              <Aside />
            ) : (
              <>
                <Aside2 />
              </>
            )}
            <div className="content-column">
              <div className="playing-page">
                <div className="left-column">
                  <h1 className="left-heading">{currentVideo.title}</h1>
                  <p className="author-name">By {currentVideo.creator}</p>
                  <div className="current-playing">
                    <iframe
                      className="current-playing"
                      src={`https://www.youtube.com/embed/${currentVideo._id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {modal && (
                    <PlaylistModal setModal={setModal} video={currentVideo} />
                  )}
                  <div className="all-video-actions">
                    <div className="action-icons">
                      <div
                        className="like-icon"
                        onClick={() =>
                          isAuth
                            ? dislikes.some(
                                (item) => item._id === currentVideo._id
                              )
                              ? (dispatch({
                                  type: "REMOVE_FROM_DISLIKES",
                                  payload: currentVideo,
                                }),
                                addToLikes(currentVideo, dispatch))
                              : likes.some(
                                  (item) => item._id === currentVideo._id
                                )
                              ? removeFromLikes(currentVideo._id, dispatch)
                              : addToLikes(currentVideo, dispatch)
                            : alert("Please login")
                        }
                      >
                        {likes.some((item) => item._id === currentVideo._id) ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                          >
                            <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"></path>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                          >
                            <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path>
                          </svg>
                        )}
                        <div>Like</div>
                      </div>
                      <div
                        className="dislike-icon"
                        onClick={() =>
                          isAuth
                            ? likes.some(
                                (item) => item._id === currentVideo._id
                              )
                              ? (removeFromLikes(currentVideo._id, dispatch),
                                dispatch({
                                  type: "ADD_TO_DISLIKES",
                                  payload: currentVideo,
                                }))
                              : dislikes.some(
                                  (item) => item._id === currentVideo._id
                                )
                              ? dispatch({
                                  type: "REMOVE_FROM_DISLIKES",
                                  payload: currentVideo,
                                })
                              : dispatch({
                                  type: "ADD_TO_DISLIKES",
                                  payload: currentVideo,
                                })
                            : alert("Please login")
                        }
                      >
                        {dislikes.some(
                          (item) => item._id === currentVideo._id
                        ) ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                          >
                            <path d="M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649-.063.293V14a2 2 0 0 0 2 2z"></path>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                          >
                            <path d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z"></path>
                          </svg>
                        )}

                        <div>Dislike</div>
                      </div>
                      <div
                        className="watchlater-icon"
                        onClick={() =>
                          isAuth
                            ? watchlater.some(
                                (item) => item._id === currentVideo._id
                              )
                              ? removeFromWatchlater(currentVideo._id, dispatch)
                              : addToWatchlater(currentVideo, dispatch)
                            : alert("Please login")
                        }
                      >
                        {watchlater.some(
                          (item) => item._id === currentVideo._id
                        ) ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                          >
                            <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                          >
                            <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                          </svg>
                        )}

                        <div>Add to Watchlater</div>
                      </div>
                      <div
                        className="playlist-icon"
                        onClick={() => setModal(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                        >
                          <path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></path>
                        </svg>
                        <div>Add to Playlist</div>
                      </div>
                    </div>
                    <div className="views-info">
                      <div>10k views</div>
                      <div>13 hours ago</div>
                    </div>
                  </div>
                  <h3 className="desc">Description</h3>
                  <p>{currentVideo.description}</p>
                </div>
                <div className="right-column">
                  <h1 className="right-heading">Recommended</h1>
                  <div className="all-must-watch">
                    {recommendVideos.map((video) => (
                      <div className="video-card" key={video._id}>
                        <div className="card-image">
                          <Link to={`/video/${video._id}`}>
                            <img
                              className="card-image"
                              src={video.static_image}
                              onClick={
                                isAuth
                                  ? () => addToHistory(video, dispatch)
                                  : undefined
                              }
                              alt={video.creator}
                            />
                          </Link>
                        </div>
                        <p className="card-title text">{video.title}</p>
                        <div className="card-views">
                          <p>6k views</p>
                          <p className="views-pad">| 4 hours ago</p>
                        </div>
                        {isAuth ? (
                          watchlater.some((item) => item._id === video._id) ? (
                            <button
                              className="card-watch-button"
                              onClick={() =>
                                removeFromWatchlater(video._id, dispatch)
                              }
                            >
                              Remove from Watchlater
                            </button>
                          ) : (
                            <button
                              className="card-watch-button"
                              onClick={() => addToWatchlater(video, dispatch)}
                            >
                              Add to Watchlater
                            </button>
                          )
                        ) : (
                          <button
                            className="card-watch-button"
                            onClick={() => navigate("/login")}
                          >
                            Watch Later
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export { CurrentPlay };
