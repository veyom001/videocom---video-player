import { Link } from "react-router-dom";
import { Aside2 } from "../../components/aside type 2/aside2";
import { Aside } from "../../components/aside/aside";
import { mainContext } from "../../contexts/allContexts/main-context";
import {
  clearFullHistory,
  removeFromHistory,
} from "../../utilities/historyUtils";
import "./history.css";

const History = () => {
  const { state, dispatch, hamburger } = mainContext();
  const { history } = state;
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
            <div className="history-heading">
              <h1>History</h1>
              <button onClick={() => clearFullHistory(dispatch)}>
                Create Full History
              </button>
            </div>
            <div className="all-cards-home">
              {history.length ? (
                history.map((video) => (
                  <div className="video-card" key={video._id}>
                    <div className="card-image">
                      <Link to={`/video/${video._id}`}>
                        <img
                          className="card-image"
                          src={video.video_img}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="card-title text">{video.title}</div>
                    <div className="card-views">
                      <p>6k views</p>
                      <p className="hours-pading">| 4 hours ago</p>
                    </div>
                    <button
                      className="card-watch-button"
                      onClick={() => removeFromHistory(video._id, dispatch)}
                    >
                      Remove from history
                    </button>
                  </div>
                ))
              ) : (
                <h2>History is Empty</h2>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { History };
