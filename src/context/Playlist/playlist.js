import {
  createContext,
  useContext,
  useReducer,
} from "react";

const playlistContext = createContext();

const initialState = {
  status: "idle",
  playlistNamesStatus: "idle",
  playlistNames: [],
  playlistVideos: [],
};

function playlistReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_PLAYLIST_NAMES": {
      return {
        ...state,
        playlistNames: action.payload,
        playlistNamesStatus: "fulfilled",
      };
    }

    case "CREATE_NEW_PLAYLIST_NAME":
      return {
        ...state,
        playlistNames: action.payload,
      };
    case "TOGGLE_VIDEO_IN_PLAYLIST":
      return {
        ...state,
        playlistNames: action.payload,
      };
    case "GET_THE_PLAYLIST_VIDEOS":
      return {
        ...state,
        playlistVideos: action.payload.playlist,
      };
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlistNames: action.payload.playlist,
        playlistVideos: state.playlistVideos.videos.filter(
          (video) => video._id !== action.payload.videoID
        ),
      };
    case "REMOVE_PLAYLIST_NAME":
      return {
        ...state,
        playlistNames: state.playlistNames.filter(
          (playlist) => playlist._id !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default function PlaylistProvider({ children }) {
  const [state, playlistDispatch] = useReducer(playlistReducer, initialState);

  return (
    <playlistContext.Provider value={{ state, playlistDispatch }}>
      {children}
    </playlistContext.Provider>
  );
}

export function usePlaylist() {
  return useContext(playlistContext);
}
