
import {Home } from "./pages/Home/home";
import {VideoID} from "./pages/VideoID/videoID"
import './App.css';
import { Routes,Route } from "react-router-dom";

function App() {


  return (
    <div className="App">


     

    <Routes>

    <Route  path="/" element={<Home/>}/>
    <Route  path="/watch" element={<VideoID/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
