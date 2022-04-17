import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./contexts/allContexts/main-context";
import { SearchFilterProvider } from "./contexts/search-filter-context";
import { AuthProvider } from "./contexts/auth-context";
import { PlaylistProvider } from "./contexts/playlistContext/playlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PlaylistProvider>
          <ContextProvider>
            <SearchFilterProvider>
              <App />
            </SearchFilterProvider>
          </ContextProvider>
        </PlaylistProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
