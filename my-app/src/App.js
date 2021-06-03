
import {Home } from "./pages/Home/home";
import {VideoID} from "./pages/VideoID/videoID"
import './App.css';
import { Routes,Route } from "react-router-dom";
import { SignUp} from "./pages/signup/signup"
import { SignIn } from "./pages/signin/signin";
import {videoID} from "./pages/VideoID/videoID";
import {LikedVideo} from "./pages/likedvideo/likedVideo";
function App() {

// const params = useParams();
// console.log(params);
  return (
    <div className="App">


     

    <Routes>
    <Route path="/register" element={<SignUp/>}/>
    <Route exact path="/" element={<LikedVideo/>}/>
    <Route  path="/watch" element={<VideoID/>}/>
    <Route  exact path="/login" element={<Home/>}/>
    <Route 
    
    path="/watch/:videoId" element={<VideoID/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
