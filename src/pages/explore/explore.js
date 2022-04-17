import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { mainContext } from "../../contexts/allContexts/main-context";
import { useSearchFilter } from "../../contexts/search-filter-context";
import "./explore.css";
import { navbarSearch } from "../../utilities/navbarSearch";
import { addToHistory } from "../../utilities/historyUtils";
import { useAuth } from "../../contexts/auth-context";
import {
  addToWatchlater,
  removeFromWatchlater,
} from "../../utilities/watchlaterUtils";
import { Aside } from "../../components/aside/aside";
import { Aside2 } from "../../components/aside type 2/aside2";

const Explore = () => {
  const navigate = useNavigate();
  const { state, dispatch, hamburger } = mainContext();
  const { authState } = useAuth();
  const { isAuth } = authState;
  const { filterState } = useSearchFilter();
  const { allVideos, watchlater } = state;
  const [finalArray, setFinalArray] = useState(allVideos);
  useEffect(() => {
    const newArray = navbarSearch(filterState, allVideos);
    setFinalArray(newArray);
  }, [filterState]);
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
            <h2 className="must-watch">Trending Videos</h2>
            <div className="all-cards-home">
              {finalArray.map((video) => (
                <div className="video-card" key={video._id}>
                  <div className="card-image">
                    <Link to={`/video/${video._id}`}>
                      <img
                        className="card-image"
                        src={video.video_img}
                        onClick={
                          isAuth
                            ? () => addToHistory(video, dispatch)
                            : undefined
                        }
                        alt={video.title}
                      />
                    </Link>
                  </div>
                  <div className="card-title text">{video.title}</div>
                  <div className="card-views">
                    <p>6k views</p>
                    <p className="hours-pading">| 4 hours ago</p>
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
      </main>
    </>
  );
};

export { Explore };
