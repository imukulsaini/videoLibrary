import "./watchLater.css";
import { NavBar } from "../../components/Navbar/Nav";
import { SideBar } from "../../components/Sidebar/Sidebar";
import { VideoCards } from "../../components/VideoCard/VideoCard";
import { useWatchLater } from "../../../context/watchLater/watchLater";
import { HeadingMain } from "../../components/HeadingMain/HeadingMain";
import { DropDownRemoveButton } from "./components/dropDownRemoveButton";
import { LoadingSpinner } from "../../components/Spinner/LoadingSpinner";
export function WatchLater() {
  const {
    loading,
    state: { watchLaterVideos },
  } = useWatchLater();

  return (
    <div className="watchlater-video">
      <NavBar />
      <SideBar isSideBarShrink={false} />
      <section className="watchlater__main">
        <HeadingMain name={"Watch Later"} />
        {loading === "pending" && <LoadingSpinner isDefaultCss={true} size={30} />}
        {loading === "fulfilled" &&
          watchLaterVideos &&
          watchLaterVideos?.map((video) => (
            <div className="watchlater__show">
              <VideoCards
                isvideoCardTypeHorizontal={true}
                videoData={video}
                isDropDownShow={true}
              >
                <DropDownRemoveButton
                  videoID={video._id}
                  buttonText={"remove"}
                />
              </VideoCards>
            </div>
          ))}
        ;
      </section>
    </div>
  );
}
