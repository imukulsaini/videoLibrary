import { createContext, useEffect, useState, useContext, useReducer } from "react";

const watchLaterVideosContext  = createContext();


const initialState = {

watchLaterVideos:[]

}

function watchLaterReducer(state,action){

switch(action.type){

    case 'INITIALIZE_WATCH_LATER_VIDEOS':{

        console.log(action.payload)
        return{
            ...state,
            watchLaterVideos:action.payload
        }}
        default:return state;
}
}





export default function WatchLaterProvider({children}){

const [ state , watchLaterDispatch] = useReducer(watchLaterReducer , initialState)


    return (
        <watchLaterVideosContext.Provider value={{ watchLaterVideos : state.watchLaterVideos ,watchLaterDispatch}}>
            {children}
        </watchLaterVideosContext.Provider>
    )
} 


export function useWatchLater() {
    return useContext(watchLaterVideosContext);
  }
  