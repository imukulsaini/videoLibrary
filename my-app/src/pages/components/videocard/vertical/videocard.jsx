import ReactPlayer from "react-player";
import "./videocard.css";
import {useData} from "../../../../context/data/video";

export function VideoCard() {
    const { state:{videoDataAll}} = useData();
  console.log("videoDataajsd;jl;asdl;kjasl;kdjl;akjs" , videoDataAll)
  return (
    
    
    videoDataAll.map((data)=>{
     return  <div style={{ color: "white" }} className="video-card-v">
        <div className="video-card-v__player">
          <ReactPlayer
            controls
            playing="true"
            width="100%"
            height="100%"
            className="react-player-card"
            url={`https://www.youtube.com/watch?v=${data.videoId}`}
            light={data.thumbnail}
          />
        </div>

        <div className="video-card-v__head">
          <span className="video-card-v__head-name">{data.channelName}</span>

          <div className="video-card-v__avatar">
            <img
              alt=""
              className="video-card-v__head-image"
              src={data.channelImage}
            />
          </div>
        </div>

        <span className="video-card-v__name">
         {data.title}
        </span>

        <div className="video-card-v__info">
          <span className="video-card-v__views">{data.views} K views</span>●
          <span className="video-card-v__date">2 weeks ago</span>
        </div>
        
      </div>
    })
      
  
  );
}
