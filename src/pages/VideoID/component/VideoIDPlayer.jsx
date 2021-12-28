import ReactPlayer from "react-player";
export function VideoPlayer({ videoId }) {
  return (
    <>
      <div className="videoID__player">
        {/* 
        
         here Aspect ratio is 16:9 
         
         */}

        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          controls
          playIcon
          url={`https://www.youtube.com/watch?v=${videoId}`}
        />
      </div>
    </>
  );
}
