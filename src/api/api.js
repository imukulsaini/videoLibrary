import axios from "axios";

//controllers

const API_KEY = process.env.REACT_APP_API_KEY;

function checkErrorAndReturnResponse(error) {
  if (error.response) {
    return { errMessage: error.response.data.message };
  } else if (error.request) {
    return { errMessage: "Network Error Please Try Again " };
  } else {
    console.log(error);
  }
  console.log(error.config);
}

//  User and Auth

export async function createUserAccount(
  firstName,
  lastName,
  username,
  email,
  password
) {
  const url = `${API_KEY}/signup`;

  try {
    const userResponse = await axios.post(url, {
      firstName,
      lastName,
      email,
      username,
      password,
      object: "users",
    });
    return userResponse.data;
  } catch (error) {
    const errResponse = checkErrorAndReturnResponse(error);
    return errResponse;
  }
}

export async function loginUser(username, password) {
  const url = `${API_KEY}/login`;

  try {
    const userResponse = await axios.post(url, {
      username,
      password,
    });
    return userResponse.data;
  } catch (error) {
    const errResponse = checkErrorAndReturnResponse(error);
    return errResponse;
  }
}

export async function getUserData(token, userID) {
  const url = `${API_KEY}/users/${userID}`;
  const headers = {
    authorization: token,
  };
  try {
    const response = await axios.get(url, {
      headers,
    });
    return response.data;
  } catch (error) {
    const err = checkErrorAndReturnResponse(error);
    return err;
  }
}

export async function updateProfile(
  userID,
  token,
  firstName,
  lastName,
  email,
  username
) {
  const url = `${API_KEY}/users/${userID}/profile`;
  const headers = {
    authorization: token,
  };
  try {
    const userResponse = await axios.post(
      url,
      {
        firstName,
        lastName,
        email,
        username,
      },
      { headers }
    );
    console.log(userResponse);
    return userResponse.data;
  } catch (error) {
    console.log(error);
    const err = checkErrorAndReturnResponse(error);
    return err;
  }
}

export async function updatePassword(
  userID,
  token,
  currentPassword,
  newPassword
) {
  const url = `${API_KEY}/users/${userID}/password`;
  const headers = {
    authorization: token,
  };
  try {
    const userResponse = await axios.post(
      url,
      {
        currentPassword,
        newPassword,
      },
      { headers }
    );
    return userResponse.data;
  } catch (error) {
    const err = checkErrorAndReturnResponse(error);
    return err;
  }
}

// watchLater

export async function getWatchLater(userID, token) {
  const url = `${API_KEY}/${userID}/watchlater`;

  const headers = {
    authorization: token,
  };
  try {
    const response = await axios.get(url, {
      headers,
    });
    if (response) {
      return response.data.watchLaterVideos;
    }
  } catch (error) {
    console.log(error);
    return { errMessage: error.message };
  }
}

export async function addToWatchLaterVideoInServer(userID, token, videoID) {
  const url = `${API_KEY}/${userID}/watchlater`;
  const headers = {
    authorization: token,
  };
  try {
    const response = await axios.post(
      url,
      {
        videoId: videoID,
      },
      { headers }
    );
    return response.data.video;
  } catch (error) {
    const err = checkErrorAndReturnResponse(error);
    return err;
  }
}

export async function removeWatchLaterVideoFromServer(userID, token, videoID) {
  const url = `${API_KEY}/${userID}/watchlater`;

  try {
    const response = await axios.delete(url, {
      headers: {
        authorization: token,
      },
      data: {
        videoId: videoID,
      },
    });
    if (response.status === 204) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return { errMessage: error.message };
  }
}

// Playlist

export async function togglePlayListVideo(userID, token, videoID, playlistID) {
  const url = `${API_KEY}/${userID}/playlist/${playlistID}`;

  const headers = {
    authorization: token,
  };
  try {
    const response = await axios.post(
      url,
      {
        videoId: videoID,
      },
      { headers }
    );
    return response.data.playlist;
  } catch (error) {
    const err = checkErrorAndReturnResponse(error);
    return err;
  }
}

export async function getUserPlaylist(userID, token) {
  const url = `${API_KEY}/${userID}/playlist`;
  const headers = {
    authorization: token,
  };
  try {
    const response = await axios.get(url, { headers });
    return response.data.playlist;
  } catch (error) {
    return { errMessage: error.message };
  }
}

export async function removePlaylist(userID, token, playlistID) {
  try {
    const url = `${API_KEY}/${userID}/playlist/${playlistID}`;
    const headers = {
      authorization: token,
    };
    const response = await axios.delete(url, {
      headers,
    });
    if (response.status === 204) {
      return true;
    }
  } catch (error) {
    console.log(error.message);
    console.log(error);
    return { errMessage: error.message };
  }
}

export async function createUserPlaylist(userID, token, name) {
  const url = `${API_KEY}/${userID}/playlist
      `;
  const headers = {
    authorization: token,
  };
  try {
    const response = await axios.post(
      url,
      {
        name: name,
      },
      { headers }
    );
    return response.data.userPlaylist;
  } catch (error) {
    return { errMessage: error.message };
  }
}

export async function getPlaylistVideo(userID, token, playlistID) {
  const url = `${API_KEY}/${userID}/playlist/${playlistID}`;
  const headers = {
    authorization: token,
  };
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    return { errMessage: error.message };
  }
}

export async function removePlaylistVideo(userID, token, videoID, playlistID) {

  const url = `${API_KEY}/${userID}/playlist/${playlistID}`;

  const headers = {
    authorization: token,
  };
  try {
    const response = await axios.post(
      url,
      {
        videoId: videoID,
      },
      { headers }
    );

    return response.data.playlist;
  } catch (error) {
    const err = checkErrorAndReturnResponse(error);
    return err;
  }
}

// likes

export async function getUserLike(userID, token) {
  const url = `${API_KEY}/${userID}/likedVideo`;
  const headers = {
    authorization: token,
  };
  try {
    const response = await axios.get(url, { headers });

    if (response) {
      return response.data.likedVideos;
    }
  } catch (error) {
    console.log(error);
    return { errMessage: error.message };
  }
}

export async function addToLikeInServer(userID, token, videoID) {
  const url = `${API_KEY}/${userID}/likedVideo`;
  const headers = {
    authorization: token,
  };
  try {
    const response = await axios.post(
      url,
      {
        videoId: videoID,
      },
      { headers }
    );
    return response.data.video;
  } catch (error) {
    console.log(error);
    return { errMessage: error.message };
  }
}

export async function removeLike(userID, token, videoID) {
  const url = `${API_KEY}/${userID}/likedVideo`;
  try {
    const response = await axios.delete(url, {
      headers: {
        authorization: token,
      },
      data: {
        videoId: videoID,
      },
    });
    if (response.status === 204) {
      return true;
    }
  } catch (error) {
    console.log(error.message);
    console.log(error);
    return { errMessage: error.message };
  }
}

// Videos

export async function getVideoByID(videoID) {
  const url = `${API_KEY}/videos/${videoID}`;

  try {
    const videoResponse = await axios.get(url);

    return videoResponse.data.video[0];
  } catch (error) {
    if (error.response) {
      return { errMessage: error.message };
    } else if (error.request) {
      return { errMessage: " Network Error Please Try Again " };
    } else {
      console.log(error);
    }
    console.log(error.config);
  }
}

export async function getCategoryVideos(categoryName) {
  const url = `${API_KEY}/videos/category/${categoryName}`;

  try {
    const response = await axios.get(url);
    console.log(response);
    return response;
  } catch (error) {
    if (error.response) {
      return { errMessage: error.message };
    } else if (error.request) {
      return { errMessage: " Network Error Please Try Again " };
    } else {
      console.log(error);
    }
    console.log(error.config);
  }
}

export async function getAllVideos() {
  const url = `${API_KEY}/videos`;

  try {
    const videoResponse = await axios.get(url);
    return videoResponse;
  } catch (error) {
    if (error.response) {
      return { errMessage: error.message };
    } else if (error.request) {
      return { errMessage: " Network Error Please Try Again " };
    } else {
      console.log(error);
    }
    console.log(error.config);
  }
}

// trending Videos

export async function getTrendingVideos() {
  const url = `${API_KEY}/videos/trending`;
  try {
    const videoResponse = await axios.get(url);
    return videoResponse;
  } catch (error) {
    if (error.response) {
      return error.message;
    } else if (error.request) {
      return { message: " Network Error Please Try Again " };
    } else {
      console.log(error);
    }
    console.log(error.config);
  }
}
