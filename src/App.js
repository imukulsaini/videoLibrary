import { Home } from "./pages/Home/Home";
import { VideoID } from "./pages/VideoID/VideoID";
import { SignUp } from "./pages/Signup/Signup";
import { SignIn } from "./pages/SignIn/Signin";
import { LikedVideo } from "./pages/Private/likedvideo/likedVideo";
import { Trending } from "./pages/Trending/Trending.jsx";
import { useAuth } from "./context/auth/auth";
import jwt_decode from "jwt-decode";
import { getUserData } from "./api/api";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { WatchLater } from "./pages/Private/WatchLater/WatchLater";
import { AccountSettings } from "./pages/Private/AccountSettings/AccountSettings";
import { PasswordSetting } from "./pages/Private/AccountSettings/components/PasswordSettings";
import { ProfileSetting } from "./pages/Private/AccountSettings/components/ProfileSettings";
import { PlaylistID } from "./pages/Private/PlaylistID/PlaylistID";
import { Playlist } from "./pages/Private/PlayList/Playlist";
import { getTokenFromLocalStorage, checkExpToken } from "./pages/utils";
import { Category } from "./pages/Category/Category";
import { PrivateRoute } from "./pages/Private/PrivateRoute/PrivateRoute";
import { NoMatch } from "./pages/NoMatch/NoMatch";

function App() {
  const {
    authState: { isUserLogin },
    authDispatch,
  } = useAuth();

  let location = useLocation();
  const navigate = useNavigate();
  const userPrevLocation = `${location?.pathname} ${location?.search}`;
  useEffect(() => {
    (async function () {
      if (!isUserLogin) {
        const token = getTokenFromLocalStorage();
        if (token) {
          const { exp, userID } = jwt_decode(token);
          const expToken = checkExpToken(exp);
          if (!expToken) {
            const userDetails = await getUserData(token, userID);
            if (!userDetails.errMessage) {
              authDispatch({
                type: "REFRESH_USER_DATA",
                payload: userDetails,
              });
              navigate(userPrevLocation||'/');

            } else {
              navigate("/login");
            }
          }
        } else {
          navigate(location.search);
        }
      }
    })();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/watch/:videoID" element={<VideoID />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/category" element={<Category />} />

        <PrivateRoute path="/account" element={<AccountSettings />}>
          <PrivateRoute index element={<ProfileSetting />} />
          <PrivateRoute path="profile" element={<ProfileSetting />} />
          <PrivateRoute path="password" element={<PasswordSetting />} />
        </PrivateRoute>

        <PrivateRoute path="/likes" element={<LikedVideo />} />
        <PrivateRoute path="/watch-later" element={<WatchLater />} />
        <PrivateRoute path="/playlist" element={<Playlist />} />
        <PrivateRoute path="playlist/:playlistID" element={<PlaylistID />} />

        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
