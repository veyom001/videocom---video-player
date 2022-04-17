import { createContext, useContext, useState } from "react";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: localStorage.token ? true : false,
    userInfo: localStorage.userName ? localStorage.userName : null,
    token: localStorage.token ?? null,
  });
  return (
    <authContext.Provider value={{ authState, setAuthState }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
