import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import VideoProvider from "./context/video.js/video";
import { AuthProvider } from "./context/auth/auth";
import WatchLaterProvider from "./context/watchLater/watchLater";
import LikeVideosProvider from "./context/likeVideo/likeVideo";
import PlaylistProvider from "./context/Playlist/playlist";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideoProvider>
          <PlaylistProvider>
            <LikeVideosProvider>
              <WatchLaterProvider>
                <App />
              </WatchLaterProvider>
            </LikeVideosProvider>
          </PlaylistProvider>
        </VideoProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
