import {useData} from "../../../context/data/video"
import {VideoCard} from "../../components/videocard/horizontal/videocard";


export function WatchLaterVideos()

{  
    

    const {
        state: { watchLaterVideos },
      } = useData();

   console.log("watchLater Videos ===  " ,{watchLaterVideos})
    return watchLaterVideos.map((video) => {
        return (

          <div style={{ width: "90%", border: "1px solid #313339" , position:'relative',marginTop:'2rem', padding:'0rem'}}>
            <VideoCard video={video} >
            </VideoCard>
          </div>
        );
      })
}