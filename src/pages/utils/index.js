export function getTokenFromLocalStorage() {
    return JSON.parse(localStorage?.getItem("token"));
  }

export function checkExpToken(exp) {
    if (Date.now() >= exp * 1000) {
      return false;
    }
  }