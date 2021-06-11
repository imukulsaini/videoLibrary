import {useState} from "react";
import { MdWatchLater, MdPlaylistAdd } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAuth } from "../../../../context/data/auth/auth";
import { useData } from "../../../../context/data/video";
import axios from "axios";

export function DropDownOptionButton({videoId,children})
{
    const [isOpen , setIsOpen] = useState(false)
    const {userData, token } = useAuth();
    const {dispatch} = useData();

    async function removeWatchLaterVideoFromServer(userID, token,videoID)
    {
      console.log({userID, token,videoID})

      const url =
      `https://video-library-2.mukulsaini02.repl.co/v1/${userID}/watch-later`;
    
      const response = await axios.delete(url , 
      {
        headers:{
          authorization:token
        }
      },
      {Body:{
        "videoId":videoID
      }} 
      
      )

    if (response.status === 200) {
      return response.data.user.watchLater;
    }
    }
  async function removeFromWatchLater(userID, token,videoID)
  { 
    const response = await removeWatchLaterVideoFromServer(userID, token,videoID)

    if (response) {
      dispatch({
        type: "REMOVE_WATCH_LATER_VIDEO",
        payload: response,
      });
    }
  }
    return (

        <div
            
        //   ref={menuRef} 
          
          className="liked-option">
            <button
              onClick={(video_id) => setIsOpen(!isOpen)}
              className="liked-option__btn"
            >
              <BsThreeDotsVertical className="option-button" />
            </button>

            {
            
            
            isOpen && (
              <div className="dropdown-option">

                <div className="option-items">
                  <MdPlaylistAdd className="option-icon playlist " />

                  <button className="dropdown-option__btn">
                    Save to Playlist
                  </button>
                </div>

                <div 
                onClick={()=>removeFromWatchLater(userData._id,token,videoId)}
                
                className="option-items">
                  <MdWatchLater className="option-icon watch-later " />

                  <button 
                  
                  
                  className="dropdown-option__btn">
                    Remove from Watch Later 
                  </button>
                </div>
              </div>
            )}
          </div>
    )
}