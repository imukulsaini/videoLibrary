import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import { useAuth } from "./auth/auth";

function dataReducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        videoDataAll: action.payload,
      };
    case "INITIALIZE_LIKED_VIDEO":
      return {
        ...state,
        likedVideos: action.payload,
      };
    case "ADD_TO_LIKED_VIDEO":
      return {
        ...state,
        likedVideos: [...state.likedVideos, action.payload],
      };
    case "REMOVE_LIKED_VIDEO":
      return {
        ...state,
        likedVideos: state.likedVideos.filter(
          (video) => video._id !== action.payload._id
        ),
      };
    case "INITIALIZE_WATCH_LATER_VIDEO":
      return {
        ...state,
        watchLaterVideos: action.payload,
      };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: [...state.watchLaterVideos, action.payload],
      };
      case 'ini':
        return{
          ...state ,
          abc : action.payload
        }
    case "REMOVE_WATCH_LATER_VIDEO":
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.filter(
          (video) => video._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
}

const dataContext = createContext();

const initialState = {
  videoDataAll: [],
  likedVideos: [],
  watchLaterVideos: [],
};

export function initializeUserData(userData, dispatch) {
  if (userData) {
    dispatch({
      type: "INITIALIZE_WATCH_LATER_VIDEO",
      payload: userData.watchLater,
    });
    dispatch({
      type: "INITIALIZE_LIKED_VIDEO",
      payload: userData.likedVideo,
    });
  }
}

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const { userData, isUserLogin } = useAuth();

  useEffect(() => {
    if (isUserLogin) {
      initializeUserData(userData, dispatch);
    }
  }, [isUserLogin]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://ecommerceBacked.imukulsaini.repl.co/videos"
        );

        dispatch({
          type: "SET_DATA",
          payload: response.data.videos,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <dataContext.Provider value={{ state, dispatch }}>
      {children}{" "}
    </dataContext.Provider>
  );
}

export function useData() {
  return useContext(dataContext);
}
