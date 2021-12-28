import {
  createContext,
  useEffect,
  useState,
  useContext,
  useReducer,
} from "react";
import { getWatchLater } from "../../api/api";
import { useAuth } from "../auth/auth";

const watchLaterVideosContext = createContext();

const initialState = {
  watchLaterVideos: [],
};

function watchLaterReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_WATCH_LATER_VIDEOS": {
      return {
        ...state,
        watchLaterVideos: action.payload,
      };
    }
    case "REMOVE_VIDEO_FROM_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.filter(
          (video) => video._id !== action.payload
        ),
      };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: [...state.watchLaterVideos, action.payload],
      };
    default:
      return state;
  }
}

export default function WatchLaterProvider({ children }) {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [state, watchLaterDispatch] = useReducer(
    watchLaterReducer,
    initialState
  );
  const {
    authState: { userID, token },
  } = useAuth();

  useEffect(() => {
    setLoading("pending");
    if (userID && token) {
      (async function () {
        const response = await getWatchLater(userID, token);
        if (response?.errMessage) {
          setLoading("rejected");
          setError(response.errMessage);
        } else {
          setLoading("fulfilled");
          watchLaterDispatch({
            type: "INITIALIZE_WATCH_LATER_VIDEOS",
            payload: response,
          });
        }
      })();
    }
  }, [userID, token]);

  return (
    <watchLaterVideosContext.Provider
      value={{ state, watchLaterDispatch, loading, error }}
    >
      {children}
    </watchLaterVideosContext.Provider>
  );
}

export function useWatchLater() {
  return useContext(watchLaterVideosContext);
}
