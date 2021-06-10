import "./likedVideo.css";
import {NavBar} from "../components/navbar/nav";
import {SideBar} from "../components/sidebar/sidebar";
import {VideoCard} from "../components/videocard/horizontal/videocard";
import {useData} from "../../context/data/video";

export function LikedVideo()
{
    const {state:{likedVideo}} = useData();

    console.log("liked Video ==== " , likedVideo)
    return (
        
        <div className="liked-video">
            <NavBar/>
            <SideBar/>
            <section className="main-likes"> 

            <div className="heading">
             <h2 class="heading-name">Likes</h2>
            </div>
                <div className="divider-s"></div>

                <div style={{ width: '100%' }}>
                

              
                </div>
                

            </section>

            
        </div>
        
    )
}