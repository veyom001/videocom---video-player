import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import "./signup.css";
import axios from "axios";
useState;
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useAuth();
  const navigate = useNavigate();
  const signupFunction = async (firstName, lastName, emailId, password) => {
    try {
      const userDetails = {
        email: emailId,
        password: password,
        firstName: firstName,
        lastName: lastName,
      };
      const { data } = await axios.post("/api/auth/signup", userDetails);
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("userName", data.createdUser.firstName);
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
      <div className="signup-box-outside">
        <div className="signup-box">
          <h2>Signup</h2>
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            type="text"
            placeholder="first name"
            className="email-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="last name"
            className="email-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email-input" className="label">
            Email address
          </label>
          <input
            type="text"
            placeholder="mohit@gmail.com"
            className="email-input"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <label htmlFor="password-input" className="label">
            Password
          </label>
          <input
            type="password"
            placeholder="************"
            className="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="row-1">
            <label>
              <input type="checkbox" />I accept all Terms & Conditions
            </label>
          </div>

          <button
            onClick={() =>
              signupFunction(firstName, lastName, emailId, password)
            }
          >
            Create New Account
          </button>
          <div className="icon-new-account">
            <Link to="/login">
              {" "}
              <p>Already have an account</p>
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

export { Signup };
