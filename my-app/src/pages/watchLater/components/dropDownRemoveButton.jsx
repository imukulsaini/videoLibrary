import axios from "axios";
import { useData } from "../../../context/data/video";
import { MdWatchLater } from "react-icons/md";

export function WatchLaterRemoveOption({ userData, token, video }) {
  const { dispatch } = useData();

  async function removeWatchLaterVideoFromServer(userID, token, videoID) {
    const url =
      "https://video-library-2.mukulsaini02.repl.co/v1/60b5aaea343f5500f35faf47/watch-later";

    await axios.delete(url, {
      headers: {
        authorization: token,
      },
      data: {
        videoId: videoID,
      },
    });
  }

  function removeFromWatchLater(userID, token, video) {
    dispatch({
      type: "REMOVE_WATCH_LATER_VIDEO",
      payload: video,
    });
    removeWatchLaterVideoFromServer(userID, token, video._id);
  }

  return (
    <div
      onClick={() => removeFromWatchLater(userData._id, token, video)}
      className="option-items"
    >
      <MdWatchLater className="option-icon watch-later " />

      <button className="dropdown-option__btn">Remove from Watch Later</button>
    </div>
  );
}
