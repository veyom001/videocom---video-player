import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { MockAPI } from "./mockman";
import { CurrentPlay } from "./pages/current play/currentPlay";
import { Disliked } from "./pages/disliked/disliked";
import { Error } from "./pages/error page/error";
import { Explore } from "./pages/explore/explore";
import { History } from "./pages/history/history";
import { Home } from "./pages/home/home";
import { Liked } from "./pages/liked videos/liked";
import { Login } from "./pages/login/login";
import { PlaylistModal } from "./pages/playlist modal/playlistModal";
import { PlaylistVideos } from "./pages/playlist videos/playlistVideos";
import { Playlist } from "./pages/playlist/playlist";
import { Signup } from "./pages/signup/signup";
import { WatchLater } from "./pages/watch later/watchLater";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:playlistId" element={<PlaylistVideos />} />
        <Route path="/video/:videoId" element={<CurrentPlay />} />
        <Route path="/history" element={<History />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<MockAPI />} />
        <Route path="/disliked" element={<Disliked />} />
        <Route path="/modal" element={<PlaylistModal />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
