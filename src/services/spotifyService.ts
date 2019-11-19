class SpotifyService {
  constructor() {}

  webserverBaseURL = "http://localhost:3001";

  login() {
    fetch(this.webserverBaseURL + "/login");
  }

  getPlaylist() {
    return fetch(this.webserverBaseURL + "/playlist")
      .then(response => response.json())
      .then(json => json);
  }
}
