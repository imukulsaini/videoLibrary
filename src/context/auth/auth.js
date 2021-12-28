import { createContext, useEffect, useContext, useReducer } from "react";

const authContext = createContext();

function setTokenToLocalStorage(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

const authInitialState = {
  token: null,
  userData: null,
  userID: null,
  isUserLogin: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userData: action.payload.userData,
        isUserLogin: true,
        userID: action.payload.userData._id,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        ...state,
        userID:null,
        isUserLogin: false,
        userData: null,
        token: null,
      };

    case "REFRESH_USER_DATA":
      return {
        ...state,
        userData: action.payload.userData,
        isUserLogin: true,
        userID: action.payload.userData._id,
        token: action.payload.token,
      };
    case "UPDATE_PROFILE_DATA":
      return {
        ...state,
        userData: action.payload.userData,
      };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  useEffect(()=> {
    authState.isUserLogin === true ? setTokenToLocalStorage(authState.token) 
    : localStorage.clear(); 
  },[authState.isUserLogin,authState.token])

  
  return (
    <authContext.Provider
      value={{
        authState,
        authDispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
