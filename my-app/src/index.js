import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./context/video/video";
import { AuthProvider } from "./context/auth/auth";
import WatchLaterProvider from "./context/watchLater/watchLater";
import LikeVideosProvider from "./context/likeVideo/likeVideo";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <LikeVideosProvider>
            <WatchLaterProvider>
              <App />
            </WatchLaterProvider>
          </LikeVideosProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
