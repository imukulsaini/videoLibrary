import ReactPlayer from "react-player";
import "./videocard.css"

export function VideoCard({width})
{
    return (
        <>
        
<div className="videos-h__card">

<div className="videos-h__player">


<ReactPlayer
style={{border:'1px solid white'}}
controls
playing="true"
width="100%"
height="100%"
className="react-player-h"
url="https://www.youtube.com/watch?v=bEid8tWexKo"
light="https://laravelnews.imgix.net/images/airdrop-for-laravel.png"
/>
 </div>


    <div className="videos-h__info">

    <span className="videos-h__name">
    Basic how to ride your bicycle comfortable Basic how to ride your
    bicycle conformable
    </span>
    <span className="video-h__channel-name">
        Alon yuoty
    </span> 
        
    <span className="video-h__views">
    10k views ● 10 months ago
    </span> 
    </div>


</div>
        </>
    )
} 