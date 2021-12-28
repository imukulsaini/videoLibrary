import { createContext, useContext, useReducer } from "react";

const likeVideosContext = createContext();

const initialState = {
  likedVideos: [],
};

function likeVideoReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_LIKE_VIDEOS": {
      return {
        ...state,
        likedVideos: action.payload,
      };
    }
    case "ADD_TO_LIKED_VIDEO":
      return {
        ...state,
        likedVideos: [...state.likedVideos, action.payload],
      };
    case "REMOVE_FROM_LIKED_VIDEO":
      return {
        ...state,
        likedVideos: state.likedVideos.filter(
          (video) => video?._id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export default function LikeVideosProvider({ children }) {
  const [state, likeDispatch] = useReducer(likeVideoReducer, initialState);

  return (
    <likeVideosContext.Provider
      value={{ state, likedVideos: state.likedVideos, likeDispatch }}
    >
      {children}
    </likeVideosContext.Provider>
  );
}

export function useLike() {
  return useContext(likeVideosContext);
}
