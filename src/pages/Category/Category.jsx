import { useSearchParams } from "react-router-dom";
import { NavBar } from "../components/Navbar/Nav";
import { SideBar } from "../components/Sidebar/Sidebar";
import { useVideosData } from "../../context/video.js/video";
import "./Category.styles.css";
import { useEffect ,useState} from "react";
import { VideoCards } from "../components/VideoCard/VideoCard";
import { getCategoryVideos } from "../../api/api";
import { HeadingMain } from "../components/HeadingMain/HeadingMain";

import { LoadingSpinner } from "../components/Spinner/LoadingSpinner";

export function Category() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState("idle");
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");
  const {
    state: { categoryVideos },
    videoDispatch,
  } = useVideosData();

  useEffect(() => {
    const getcategoryName = searchParams.get("name");
    setCategoryName(getcategoryName);
  }, [searchParams]);

  useEffect(() => {
    (async function () {
      setLoading("pending");
      if (categoryName) {
        const response = await getCategoryVideos(categoryName.toLowerCase());
        if (response.errMessage) {
          setLoading("rejected");
          setError(response.errMessage);
        } else {
          setLoading("fulfilled");
          videoDispatch({
            type: "SET_CATEGORY_VIDEOS",
            payload: response.data.videos,
          });
        }
      }
    })();
  }, [categoryName]);

  const pageHeadingName =
    categoryName &&
    categoryName.charAt(0).toUpperCase() +
      categoryName.slice(1).toLocaleLowerCase();

  return (
    <>
      <div className="category">
        <NavBar />
        <SideBar isSideBarShrink={false} />
        <section className="category__main">
          <HeadingMain name={pageHeadingName} />

          {loading === "pending" && (
            <LoadingSpinner isDefaultCss={true} size={30} />
          )}
          {loading === "fulfilled" && (
            <div className="home__discover ">
              {categoryVideos &&
                categoryVideos.map((video) => (
                  <VideoCards
                    isvideoCardTypeHorizontal={false}
                    videoData={video}
                    isDropDownShow={false}
                  />
                ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
