export   function filterSearchVideos(videos, search) {
    return videos.filter((video) =>
      search === null
        ? video
        : video.title.toLowerCase().includes(search.toLowerCase())
    );
  }