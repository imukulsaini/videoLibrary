
import {Home } from "./pages/Home/home";
import {VideoID} from "./pages/VideoID/videoID"
import './App.css';
import { Routes,Route } from "react-router-dom";
import { SignUp} from "./pages/signup/signup"
import { SignIn } from "./pages/signin/signin";
function App() {


  return (
    <div className="App">


     

    <Routes>
    <Route path="/register" element={<SignUp/>}/>
    <Route path="/" element={<Home/>}/>
    <Route  path="/watch" element={<VideoID/>}/>
    <Route  path="/login" element={<SignIn/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
