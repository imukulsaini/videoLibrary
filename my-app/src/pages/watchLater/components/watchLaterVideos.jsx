import { useData } from "../../../context/data/video";
import { VideoCard } from "../../components/videocard/horizontal/videocard";
import { WatchLaterRemoveOption } from "./dropDownRemoveButton";
import { useAuth } from "../../../context/data/auth/auth";
export function WatchLaterVideos() {
  const { token, userData } = useAuth();

  const {
    state: { watchLaterVideos },
  } = useData();

  return watchLaterVideos.map((video) => {
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
          <WatchLaterRemoveOption
            userData={userData}
            token={token}
            video={video}
          />
        </VideoCard>
      </div>
    );
  });
}
