import React, { Component } from "react";
import PlaylistModel from "../models/playlistModel";
import TrackModel from "../models/trackModel";

const webserverBaseURL = "http://localhost:3001/spotify";
const loginEP = "/login";
const playlistsEP = "/playlists";
const playlistEP = "/playlist/";
const playEP = "/player/play/";
const pauseEP = "/player/pause";

export default class SpotifyService extends Component {
  constructor(props: any) {
    super(props);
  }

  private getJson(url: string) {
    return fetch(url).then(response => response.json());
  }

  login() {
    fetch(webserverBaseURL + "/login").then(response => {
      if (response.ok)
        response.text().then(body => (window.location.href = body));
      else console.error("Login Request Error");
    });
  }

  getPlaylists() {
    return this.getJson(webserverBaseURL + playlistsEP).then(json =>
      json.items.map((playlist: any) => new PlaylistModel(playlist))
    );
  }

  getPlaylist(id: string) {
    return this.getJson(webserverBaseURL + playlistEP + id).then(
      json => new PlaylistModel(json)
    );
  }

  startPlaylist(playlist: string, offset: number) {
    let body = {};
    if (playlist)
      body = { context_uri: `spotify:playlist:${playlist}`, offset };
    return fetch(webserverBaseURL + playEP, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(response => response.json());
  }

  pausePlayer() {
    return fetch(webserverBaseURL + pauseEP, {
      method: "PUT"
    });
  }
}
