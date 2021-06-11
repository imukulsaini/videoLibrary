import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import { useAuth } from "./auth/auth";



// async function addWatchLaterVideo (watchLaterVideos , payload)
// {
  
//   const url = "https://video-library-2.mukulsaini02.repl.co/v1/60b5aaea343f5500f35faf47/watch-later";

//   const response = await axios.post(url , {
//     headers:
//   })
// }


function dataReducer(state, action) {


  switch (action.type) {
    case "SET_DATA":
      return {  
        ...state,
        videoDataAll: action.payload,
      };
    case "ADD_TO_LIKED_VIDEO":
      return {
        ...state,
        likedVideos: [...state.likedVideos, action.payload],
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
      case "REMOVE_WATCH_LATER_VIDEO":
        return {
          ...state,
          watchLaterVideos: action.payload,
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

  if(userData)
  {
    dispatch({
      type: "INITIALIZE_WATCH_LATER_VIDEO",
      payload: userData.watchLater,
    });

  }
 



}

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const { userData, isUserLogin } = useAuth();

  useEffect(() => {
    if(isUserLogin)
    {
      initializeUserData(userData, dispatch);
    }
    
  }, [isUserLogin]);


  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://video-library-2.mukulsaini02.repl.co/videos"
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
