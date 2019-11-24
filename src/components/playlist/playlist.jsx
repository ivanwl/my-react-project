import React, { Component } from "react";
import Card from "../card/card";
import SpotifyService from "../../services/spotifyService";
import PlaylistModel from "../../models/playlistModel";
import TrackModel from "../../models/trackModel";
import "./style.css";

let spotifyService = new SpotifyService();

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: false,
      playlist: null,
      track: [],
      list: [],
      id: []
    };
  }

  componentDidMount() {
    spotifyService.getPlaylists().then(playlists => {
      this.setState({
        list: playlists.map(playlist => playlist.name),
        id: playlists.map(playlist => playlist.id)
      });
    });
  }

  handlePlaylist(id) {
    spotifyService.getPlaylist(id).then(playlist => {
      this.setState({
        showCard: true,
        list: playlist.tracks.map(track => track.name),
        id: playlist.tracks.map(track => track.id),
        playlist: playlist
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="card mb-3 col-sm-5 p-0" max-width="540px">
          {this.state.showCard && <Card playlist={this.state.playlist} />}
          <ul className="list-group">
            {this.state.list.length ? (
              this.state.list.map((entry, index) => (
                <li className="list-group-item" key={this.state.id[index]}>
                  <a
                    href="#"
                    onClick={() => this.handlePlaylist(this.state.id[index])}
                  >
                    {entry}
                  </a>
                </li>
              ))
            ) : (
              <li className="list-group-item">No Playlist</li>
            )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
