import { useData } from "../../../context/video/video";
import { VideoCard } from "../../components/videocard/horizontal/videocard";
import { WatchLaterRemoveOption } from "./dropDownRemoveButton";
import { useAuth } from "../../../context/auth/auth";
import { useEffect } from "react";
import { useWatchLater } from "../../../context/watchLater/watchLater";
import axios from "axios";

export function WatchLaterVideos() {

  const { token, userData, userID , isUserLogin} = useAuth();
  const {watchLaterVideos, watchLaterDispatch } = useWatchLater();
  console.log({watchLaterVideos})

  useEffect(()=>{
    
if(userID){


    
    (async function (){
      console.log('watchLater useEffect running .... ')

      const url = `https://videoLibraryBackend.imukulsaini.repl.co/v1/${userID}/watchlater`;
      const headers ={
        authorization:token
      }
      const response = await axios.get(url , {
        headers
      })
      if(response.data.status === 201 ){
        watchLaterDispatch({type:'INITIALIZE_WATCH_LATER_VIDEOS' , payload:response.data.watchLaterVideos})

      }
    })()

}
  },[])

  return watchLaterVideos.map((video) => {
    return (
      <div
        style={{
          width: "90%",
          border: "1px solid #313339",
          position: "relative",
          marginTop: "2rem",
          padding: "0rem",
        }}
      >
        <VideoCard video={video}>
          <WatchLaterRemoveOption
            userData={userData}
            token={token}
            video={video}
          />
        </VideoCard>
      </div>
    );
  });
}
