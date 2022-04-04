
  export function checkUserInVideoLikes(videoIDInfo, userID) {
    return videoIDInfo.includes(userID);
  }

  export function checkVideoInWatchLater(watchLaterVideos, videoID) {
    const response = watchLaterVideos?.find((video) => video._id === videoID);
    return response ? true : false;
  }