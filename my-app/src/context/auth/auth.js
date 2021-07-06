import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import jwt_decode from "jwt-decode";

const authContext = createContext();

export function AuthProvider({ children }) {

  const [token, setToken] = useState('');
  const [isUserLogin, setUserLogin] = useState(false);
  const [userData, setUserData] = useState('');
  const [userID , setUserID] = useState('')


  useEffect(() => {
    
    console.log("auth useEffect run....")
    const checkToken = JSON.parse(localStorage.getItem("token"));
    if (checkToken) {
      const decodedToken = jwt_decode(checkToken);
      afterDecodeToken(decodedToken, checkToken);
    }else { setUserLogin(false) }
  }, [token]);

  function afterDecodeToken(decodedToken, checkToken) {
    console.log("decoded function run....")

    if (token) {
      setUserLogin(true);
      setUserID(decodedToken.userID)
    } else {
      setToken(checkToken);
      setUserLogin(true);
      setUserID(decodedToken.userID);
    }}

  function logout() {
    setUserLogin(false);
    localStorage.clear();
  }
  

  function loginSuccess(response) {
    console.log(response.data.token)
    localStorage.setItem("token", JSON.stringify(response.data.token));
    setToken(response.data.token);
    setUserData(response.data.userData);
  }

  async function checkLoginUserCredentials(username, password) {

    const url = 'https://videoLibraryBackend.imukulsaini.repl.co/login';

    try {
      const response = await axios.post(url, {
        username: username,
        password: password,
      });

      if (response.data.status === 201) {
        console.log({response})
        loginSuccess(response);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <authContext.Provider
      value={{ checkLoginUserCredentials, isUserLogin, logout, token, userData , userID}}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
