import { useData } from "../../../context/data/video";
import { VideoCard } from "../../components/videocard/horizontal/videocard";
import { LikedVideoRemoveButton } from "./LikedVideoRemoveButton";
import { useAuth } from "../../../context/data/auth/auth";

export function LikedVideos ()
{
    const {state:{ likedVideos } } = useData();
    const {userData , token } = useAuth();
    console.log("....." , {likedVideos})
    return likedVideos.map((video) => {
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