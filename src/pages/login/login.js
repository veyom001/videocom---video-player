import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import "./login.css";
import { useAuth } from "../../contexts/auth-context";
const Login = () => {
  const navigate = useNavigate();
  const { setAuthState } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const callUserLogin = async (emailId, passw) => {
    try {
      const { data } = await axios.post("/api/auth/login", {
        email: emailId,
        password: passw,
      });
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("userName", data.foundUser.firstName);
      console.log(localStorage.token, localStorage.userName);
      setAuthState({
        isAuth: localStorage.token ? true : false,
        userInfo: localStorage.userName ? localStorage.userName : null,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="login-box-outside">
        <div className="login-box">
          <h2>Login</h2>
          <label className="label">Email address</label>
          <input
            type="text"
            placeholder="veyom7777@gmail.com"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label">Password</label>
          <input
            type="password"
            placeholder="************"
            className="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="row-1">
            <div>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>
            <p>
              <a href="#">Forgot your Password?</a>
            </p>
          </div>
          <button onClick={() => callUserLogin(email, password)}>Login</button>
          <button
            onClick={() => callUserLogin("veyom7777@gmail.com", "veyom7777")}
            id="test-login"
          >
            Test Login
          </button>
          <div className="icon-new-account">
            <Link to="/signup">
              <p>Create New Account</p>
            </Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="newaccount-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
