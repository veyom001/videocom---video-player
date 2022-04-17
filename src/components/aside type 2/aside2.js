import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import "./aside2.css";
const Aside2 = () => {
  const { authState } = useAuth();
  const { isAuth } = authState;
  return (
    <>
      <div className="aside2">
        <Link to="/">
          <div className="home">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
            </svg>
          </div>
        </Link>
        <Link to="/explore">
          <div className="explore">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3 13-8 2 2-8 8-2-2 8z"></path>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </div>
        </Link>
        {isAuth ? (
          <>
            <Link to="/playlist">
              <div className="playlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M13 16.493C13 18.427 14.573 20 16.507 20s3.507-1.573 3.507-3.507c0-.177-.027-.347-.053-.517H20V6h2V4h-3a1 1 0 0 0-1 1v8.333a3.465 3.465 0 0 0-1.493-.346A3.51 3.51 0 0 0 13 16.493zM2 5h14v2H2z"></path>
                  <path d="M2 9h14v2H2zm0 4h9v2H2zm0 4h9v2H2z"></path>
                </svg>
              </div>
            </Link>
            <hr />
            <Link to="/history">
              <div className="history">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M12 8v5h5v-2h-3V8z"></path>
                  <path d="M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z"></path>
                </svg>
              </div>
            </Link>
            <Link to="/watchlater">
              <div className="watch-later">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm1 8h-2V8h2v5zM9 2h6v2H9zm9.707 2.293 2 2-1.414 1.414-2-2z"></path>
                </svg>
              </div>
            </Link>
            <Link to="/liked">
              <div className="liked-videos">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>
            </Link>

            <Link to="/disliked">
              <div className="disliked-videos">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649-.063.293V14a2 2 0 0 0 2 2z"></path>
                </svg>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <div className="playlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M13 16.493C13 18.427 14.573 20 16.507 20s3.507-1.573 3.507-3.507c0-.177-.027-.347-.053-.517H20V6h2V4h-3a1 1 0 0 0-1 1v8.333a3.465 3.465 0 0 0-1.493-.346A3.51 3.51 0 0 0 13 16.493zM2 5h14v2H2z"></path>
                  <path d="M2 9h14v2H2zm0 4h9v2H2zm0 4h9v2H2z"></path>
                </svg>
              </div>
            </Link>
            <hr />
            <Link to="/login">
              <div className="history">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M12 8v5h5v-2h-3V8z"></path>
                  <path d="M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z"></path>
                </svg>
              </div>
            </Link>
            <Link to="/login">
              <div className="watch-later">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm1 8h-2V8h2v5zM9 2h6v2H9zm9.707 2.293 2 2-1.414 1.414-2-2z"></path>
                </svg>
              </div>
            </Link>
            <Link to="/login">
              <div className="liked-videos">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>
            </Link>

            <Link to="/login">
              <div className="disliked-videos">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649-.063.293V14a2 2 0 0 0 2 2z"></path>
                </svg>
              </div>
            </Link>
          </>
        )}
        <hr />
      </div>
    </>
  );
};

export { Aside2 };
