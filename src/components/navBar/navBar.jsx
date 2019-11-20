import React, { Component } from "react";
import "./style.css";
import SpotifyService from "../../services/spotifyService.ts";

let spotifyService = new SpotifyService();

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Weather
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Spotify
              </a>
            </li>
          </ul>
          <button
            onClick={spotifyService.login}
            className="btn btn-primary mr-3"
          >
            Login
          </button>
        </div>
      </nav>
    );
  }
}
