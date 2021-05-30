

import {VideoCard} from "../components/videocard/horizontal/videocard";
import { VideoHead } from "./component/videocontent";
import { ChannelContent } from "./component/channelcontent";
import { Divider } from "./component/divider";
import {NavBar} from "../components/navbar/nav";
import {SideBar} from "../components/sidebar/sidebar";
import {VideoPlayer} from "./component/player"
import"./videoID.css"
export function VideoID() {
  return (
    <>
      <div className="video-id">
        <NavBar />

        <section className="sidebar">
          <SideBar />
        </section>

        <section className="main">
          <div className="video-content">
            <VideoPlayer />

            <div className="video-content__head">
              <VideoHead />

              <div className="divider"></div>

              <div className="video-content__channel">
                <ChannelContent />
              </div>

              <Divider />
            </div>
          </div>
        </section>

        <section className="sidebar-r">
          <div className="sidebar-r__heading">Related Videos</div>

          <div className="videos-v">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
          
        </section>

      </div>
    </>
  );
}
