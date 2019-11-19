import React, { Component } from "react";

const webserverBaseURL = "http://localhost:3001";

export default class SpotifyService extends Component {
  constructor() {
    super();
  }

  login() {
    fetch(webserverBaseURL + "/login");
  }

  getPlaylist() {
    return fetch(webserverBaseURL + "/playlist")
      .then(response => response.json())
      .then(json => json);
  }
}
