import ReactPlayer from "react-player";
import "./videocard.css"

export function VideoCard()
{
    return (
        <>
        
        <div className="videos-v__card">

<div className="videos-v__player">
<ReactPlayer
controls
playing="true"
width="100%"
height="100%"
className="react-player-v"
url="https://www.youtube.com/watch?v=bEid8tWexKo"
light="https://laravelnews.imgix.net/images/airdrop-for-laravel.png"
/>
 </div>


    <div className="videos-v__info">

    <span className="videos-v__name">
    Basic how to ride your bicycle comfortable Basic how to ride your
    bicycle conformable
    </span>
    <span className="video-v__channel-name">
        Alon yuoty
    </span> 
        
    <span className="video-v__views">
    10k views ● 10 months ago
    </span> 
    </div>


</div>
        </>
    )
} 