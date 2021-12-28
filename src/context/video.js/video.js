import { createContext, useReducer, useContext } from "react";

const videoContext = createContext();

const initialState = {
  videoDataAll: [],
  categoryVideos:[],
};

function videoReducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        videoDataAll: action.payload,
        status: "fulfilled",
      };
    case "VIDEO_LIKED_BY_USER": {
      return {
        ...state, 
        videoDataAll: state.videoDataAll.map((video) =>
          video?._id === action.payload.videoID
            ? { ...video, likesBy: [...video.likesBy, action.payload.userID] , likes:video.likes +1 }
            : video
        ),
      };
    }
    case "VIDEO_DISLIKE_BY_USER": {
      return {
        ...state,
        videoDataAll: state.videoDataAll.map((video) =>
          video?._id === action.payload.videoID
            ? {
              ...video,
              likes:video.likes-1,
              likesBy: video.likesBy.filter(
                (likeID) =>likeID !== action.payload.userID 
              ),
            }
            : video
        ),
      };
    }
    case "SET_CATEGORY_VIDEOS":{
      return {
        ...state,
        categoryVideos:action.payload
      }
    }
    default:
      return state;
  }
}

export default function VideoProvider({ children }) {
  const [state, videoDispatch] = useReducer(videoReducer, initialState);

  return (
    <videoContext.Provider value={{ state, videoDispatch }}>
      {children}
    </videoContext.Provider>
  );
}

export function useVideosData() {
  return useContext(videoContext);
}
