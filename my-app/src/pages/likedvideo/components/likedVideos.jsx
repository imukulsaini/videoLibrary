import { useEffect } from "react";
import { useData } from "../../../context/video/video";
import { VideoCard } from "../../components/videocard/horizontal/videocard";
import { LikedVideoRemoveButton } from "./LikedVideoRemoveButton";
import { useAuth } from "../../../context/auth/auth";
import { useLike } from "../../../context/likeVideo/likeVideo";
import axios from "axios";
export function LikedVideos ({likedVideos, userData, token})

{        return likedVideos.map((video) => {
        return (
          <div
            style={{
              width: "90%",
              border: "1px solid #313339",
              position: "relative",
              marginTop: "2rem",
              padding: "0rem",
            }}
          >
            <VideoCard video={video}>
              <LikedVideoRemoveButton
                userData={userData}
                token={token}
                video={video}
              />
            </VideoCard>
          </div>
        );
      });
      
}