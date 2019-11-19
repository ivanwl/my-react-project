import React, { Component } from "react";
import "./style.css";
import SpotifyService from "../../services/spotifyService.ts";

let spotifyService = new SpotifyService();

export default class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Weather
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Spotify
              </a>
            </li>
          </ul>
          <button onClick={spotifyService.login} class="btn btn-primary mr-3">
            Login
          </button>
        </div>
      </nav>
    );
  }
}
