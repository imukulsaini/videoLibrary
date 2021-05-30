import {
  MdHome,
  MdTrendingUp,
  MdWatchLater,
  MdFeaturedPlayList,
} from "react-icons/md";
import { FaBrain, FaTree, FaBook } from "react-icons/fa";

import { GoHeart, GoGlobe } from "react-icons/go";

import "./sidebar.css";

export function SideBar() {
  return (
    <>
      <section className="side-bar">
        <div className="side-bar__menu">
          {/* <span className="side-bar__menu-name">MENU</span> */}

          <ul className="side-bar__menu-list">
              
            <li className="side-bar__menu-items  hv-itm">
              <div className="sidebar__item-icon hv-ic-itm ">
                <MdHome className="home-icon  hv-ic  " />
              </div>

              {/* <span className="side-bar__item-name hv-itm-nm">Discover</span> */}
            </li>

            <li className="side-bar__menu-items    hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm ">
                <MdTrendingUp className="home-icon hv-ic " />
              </div>

              {/* <span className="side-bar__item-name hv-itm-nm ">Trending</span> */}
            </li>

            <li className="side-bar__menu-items   hv-itm">
              <div className="sidebar__item-icon hv-ic-itm ">
                <GoHeart className="home-icon hv-ic " />
              </div>
{/* 
              <span className="side-bar__item-name hv-itm-nm ">
                liked Videos{" "}
              </span> */}
            </li>

            <li className="side-bar__menu-items   hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm  ">
                <MdWatchLater className="home-icon hv-ic  " />
              </div>

              {/* <span className="side-bar__item-name hv-itm-nm ">
                Watch later{" "}
              </span> */}

            </li>

            <li className="side-bar__menu-items   hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm  ">
                <MdFeaturedPlayList className="home-icon hv-ic  " />
              </div>

              {/* <span className="side-bar__item-name hv-itm-nm ">Playlist</span> */}
            </li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="side-bar__menu">
          {/* <span className="side-bar__menu-name">CATEGORY</span> */}

          <ul className="side-bar__menu-list">
            <li className="side-bar__menu-items  hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm  ">
                <FaTree className="home-icon hv-ic  " />
              </div>
{/* 
              <span className="side-bar__item-name   hv-itm-nm">
                Environment
              </span> */}
            </li>

            <li className="side-bar__menu-items hv-itm">
              <div className="sidebar__item-icon hv-ic-itm  ">
                <GoGlobe className="home-icon  hv-ic " />
              </div>

              {/* <span className="side-bar__item-name hv-itm-nm">History</span> */}
            </li>

            <li className="side-bar__menu-items  hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm ">
                <FaBrain className="home-icon hv-ic " />
              </div>

              {/* <span className="side-bar__item-name hv-itm-nm">Psychology </span> */}
            </li>

            <li className="side-bar__menu-items  hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm ">
                <FaBook className="home-icon hv-ic " />
              </div>

              {/* <span className="side-bar__item-name hv-itm-nm"> Biography </span> */}
            </li>
          </ul>
        </div>

        <div className="divider"></div>

        {/* <div className="theme-toggle">Night </div> */}


      </section>
    </>
  );
}
























import { useState } from "react";
import "./videoId.css";
import { NavBar } from "../../../../component/navbar/nav";
import { Footer } from "../../../../component/footer/footer";
import { SideBar } from "../sidebar/sidebar";
import ReactPlayer from "react-player";
import { AiFillLike } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
// import { VideoCard } from "../video/video";
import { VideoCard } from "../videocard-r/videocard-r";

import { VideoPlayer } from "./component/player";

export function VideoId() {
    const [showDes, setshowDes] = useState(false);

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
                            {/* <span className="video-content__name">
                Basic how to ride your bicycle comfortable Basic how to ride
                your bicycle conformable
              </span> */}

                            <div className="video-content__container">
                                {/* <div className="video-content__info">
                  <span className="video-card__views">53k views</span>●
                  <span className="video-card__date">2 weeks ago</span>
                </div> */}

                                <div className="video-content__menu">
                                    <ul className="video-content__menu-list">
                                        <li className="video-content__menu-item">
                                            <div className="video-content__icon">
                                                <AiFillLike className="icon" />
                                                <span className="video-content__icon-name">LIKE</span>
                                            </div>
                                        </li>

                                        <li className="video-content__menu-item">
                                            <div className="video-content__icon">
                                                <MdPlaylistAdd className="icon" />
                                                <span className="video-content__icon-name">SAVE</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="divider"></div>

                            <div className="video-content__channel">
                                <img
                                    className="video-content__avatar"
                                    alt=""
                                    src="https://pbs.twimg.com/profile_images/1372310949458112512/Isl5HmGT_400x400.jpg"
                                />

                                <div className="video-content__channel-info">
                                    <span className="video-content__channel-name">
                                        H5G1 MUSIC
                  </span>

                                    <span className="video-content__channel-sub">
                                        10k subscribers
                  </span>

                                    <span
                                        className={
                                            showDes ? "hideDes " : "video-content__video-des "
                                        }
                                    >
                                        {console.log(
                                            " hasdhlkhaskldhkhaskldhkalsdhklahsdklashkldhklasd",
                                            showDes
                                        )}
                    In my opinion this is the best solution, but not everyone
                    can use JS. Basically, the jQuery will check any .text
                    element, and if there are more chars than the preset max
                    var, it will cut the rest off and add an ellipsis. There are
                    no caveats to this approach, however this code example is
                    meant only to demonstrate the basic idea - I wouldn't use
                    this in production without improving on it for a two
                    reasons: 1) It will rewrite the inner html of .text elems.
                    whether needed or not. 2) It does no test to check that the
                    inner html has no nested elems - so you are relying a lot on
                    the author to use the .text correctly.
                  </span>

                                    <button
                                        onClick={() => setshowDes(!showDes)}
                                        className="show-btn"
                                    >
                                        {showDes ? "Show Less" : "Show More"}
                                    </button>
                                </div>

                                <div className="video-content__button">
                                    <button className="subscribe-btn"> SUBSCRIBE</button>
                                </div>
                            </div>

                            <div className="divider"></div>
                        </div>
                    </div>
                </section>

                <section className="sidebar-r">
                    <div className="sidebar-r__heading">Related Videos</div>

                    <div className="videos-r">
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                    </div>
                </section>

                {/* <Footer /> */}
            </div>
        </>
    );
}
