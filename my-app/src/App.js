
import {Home } from "./pages/Home/home";
import {VideoID} from "./pages/VideoID/videoID"
import './App.css';
import { Routes,Route } from "react-router-dom";
import { SignUp} from "./pages/signup/signup"
import { SignIn } from "./pages/signin/signin";
import {LikedVideo} from "./pages/likedvideo/likedVideo";
import {WatchLater} from "./pages/watchLater/watchLater"
import {Trending} from "./pages/trending/trending";
function App() {

// const params = useParams();
// console.log(params);
  return (
    <div className="App">


     

    <Routes>
    <Route path="/register" element={<SignUp/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route  exact path="/likes" element={<LikedVideo/>}/>

    <Route  path="/watch" element={<VideoID/>}/>
    <Route path="/watch-later" element={<WatchLater/>}/>
    <Route path="/trending" element={<Trending/>}/>

    <Route 
    
    path="/watch/:videoId" element={<VideoID/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
