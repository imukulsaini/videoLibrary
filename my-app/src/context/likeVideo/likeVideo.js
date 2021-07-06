import { createContext, useEffect, useState, useContext, useReducer } from "react";

const likeVideosContext  = createContext();


const initialState = {

    likedVideos:'23'

}

function likeVideoReducer(state,action){

switch(action.type){

    case 'INITIALIZE_LIKE_VIDEOS':{
        console.log(action.payload)

        return{
            ...state,
            likedVideos:action.payload
        }}
        default:return state;
        
}
}





export default function LikeVideosProvider({children}){

const [state , likeDispatch] = useReducer(likeVideoReducer ,initialState)

    return (
        <likeVideosContext.Provider value={{ likedVideos : state.likedVideos ,likeDispatch}}>
            {children}
        </likeVideosContext.Provider>
    )
} 


export function useLike() {
    return useContext(likeVideosContext);
  }
  