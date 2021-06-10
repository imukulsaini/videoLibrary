import "./watchLater.css";
import { NavBar } from "../components/navbar/nav";
import { SideBar } from "../components/sidebar/sidebar";
import { WatchLaterVideos } from "./components/watchLaterVideos";
import { useEffect } from "react";
import { useAuth } from "../../context/data/auth/auth";
import { useData } from "../../context/data/video";
import axios from "axios";

export function WatchLater() {
  const { userData,isUserLogin } = useAuth();
  const { dispatch } = useData();


  // useEffect(() => {
  //   console.log( " useEffect Launch ")

  //   if (isUserLogin) {

  //     console.log( " useEffect Launch ")


  //     const { watchLater } = userData;

  //     return dispatch({
  //       type: "INITIALIZE_WATCH_LATER_VIDEO",
  //       payload: watchLater,
  //     });
  //   }

    
  // },[]);

  console.log("watchLater Videos == " , WatchLaterVideos)


  return (
    <div className="watchlater-video">
      <NavBar />
      <SideBar />
      <section className="main-watch">
        <div className="heading">
          <h2 class="heading-name">Watch - Later</h2>
        </div>
        <div className="divider-s"></div>

        <WatchLaterVideos />
      </section>
    </div>
  );
}
