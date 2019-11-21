import React, { Component } from "react";

const webserverBaseURL = "http://localhost:3001/spotify";

export default class SpotifyService extends Component {
  constructor(props: any) {
    super(props);
  }

  login() {
    fetch(webserverBaseURL + "/login").then(response => {
      if (response.ok)
        response.text().then(body => (window.location.href = body));
      else console.error("Login Request Error");
    });
  }

  getPlaylists() {
    return fetch(webserverBaseURL + "/playlists")
      .then(response => response.json())
      .then(json => console.log(json));
  }
}
