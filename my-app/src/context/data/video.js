import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
const dataContext = createContext();

const initialState = {
  videoDataAll: [],
  likeVideos: [],
  watchLaterVideos: [],
};

function dataReducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        videoDataAll: action.payload,
      };
    default:
      return state;
  }
}

export function DataProvider({ children }) {

    const [state, dispatch] = useReducer(dataReducer, initialState);

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


  return <dataContext.Provider value={{state}}>{children} </dataContext.Provider>;
}

export function useData ()
{
    return useContext(dataContext)
}