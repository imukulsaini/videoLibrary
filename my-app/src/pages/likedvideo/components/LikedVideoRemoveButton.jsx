 import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { useData } from "../../../context/data/video";

export function LikedVideoRemoveButton({userData, token, video }){

    const { dispatch } = useData();

    async function removeLikesFromServer(userID, token, videoID )
    {
    const url =
    "https://video-library-2.mukulsaini02.repl.co/v1/60b5aaea343f5500f35faf47/likes";

  await axios.delete(url, {
    headers: {
      authorization: token,
    },
    data: {
      videoId: videoID,
    },
  });
}

function removeLikes(userID, token, video) {
  dispatch({
    type: "REMOVE_LIKED_VIDEO",
    payload: video,
  });
  removeLikesFromServer(userID, token, video._id);
}



    return(
        <div
        onClick={() => removeLikes(userData._id, token, video)}
        className="option-items"

         >
      <AiFillHeart 
      
      className="option-icon watch-later " />

      <button className="dropdown-option__btn"> Remove From Likes</button>
    </div>
    )
}