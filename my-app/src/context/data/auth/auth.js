import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";



const authContext = createContext();



export function AuthProvider({ children }) {


    const [token , setToken] = useState(null);
    const [isUserLogin , setUserLogin ] = useState(false);
    const [userData , setUserData ] = useState(null);


   


useEffect(()=>{

    const checkToken  = localStorage.getItem("token")
    checkToken && setUserLogin(true)

},[token])

function logout()
{
    setUserLogin(false);
    localStorage.clear();

    
}
    function loginSuccess(response)
    {
        localStorage.setItem("token" ,  JSON.stringify(response.data.token))
        setToken(response.data.token)
        setUserData(response.data.userData)
    }


    async function loginUserWithCredentials(username, password) {
        try {
          const response = await axios.post(
            "https://video-library-2.mukulsaini02.repl.co/login",{
                username:username
            }
          );
          console.log({response})
          if (response.status === 200) {
            
            
            loginSuccess(response)
         
              
          }
        } catch (error) {
          console.log(error);
        }
      }
      
  return (
    <authContext.Provider value={{ loginUserWithCredentials , isUserLogin ,logout ,token , userData }}>{children}</authContext.Provider>
  );
}


export function useAuth ()
{
    return  useContext(authContext)
}