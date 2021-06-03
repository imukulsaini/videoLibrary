import "./likedVideo.css";
import {NavBar} from "../components/navbar/nav";
import {SideBar} from "../components/sidebar/sidebar";
import {VideoCard} from "../components/videocard/horizontal/videocard";
export function LikedVideo()
{
    return (
        
        <div className="liked-video">
            <NavBar/>
            <SideBar/>
            <section className="main-likes"> 

            <div className="heading">
             <h2 class="heading-name">Likes</h2>
            </div>

                <div style={{width:'100%',border:'1px solid white'}}>
                <VideoCard
                />
                <button>:</button>

                 <VideoCard
                />
                </div>
                

            </section>

            
        </div>
        
    )
}