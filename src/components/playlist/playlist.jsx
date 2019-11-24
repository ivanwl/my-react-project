import React, { Component } from "react";
import placeholder_image from "../../assets/placeholder_image.jpg";
import SpotifyService from "../../services/spotifyService";
import PlaylistModel from "../../models/playlistModel";

let spotifyService = new SpotifyService();

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: false,
      list: [],
      id: [],
      name: null,
      author: null,
      description: null,
      followers: null
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

  render() {
    return (
      <React.Fragment>
        <div className="card mb-3 col-sm-5 p-0" max-width="540px">
          <div
            style={{ display: this.state.showCard ? "block" : "none" }}
            className="row no-gutters"
          >
            <div className="col-sm-4">
              <img
                src={placeholder_image}
                width="150"
                height="150"
                className="card-img"
              />
            </div>
            <div className="col-sm-8">
              <div className="card-body">
                <h5 className="card-title">
                  {this.state.name ? this.state.name : ""}
                </h5>
                <p className="card-text">
                  {this.state.description ? this.state.description : ""}
                  <br></br>
                  {this.state.author ? this.state.author : ""}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Followers: {this.state.follower ? this.state.follower : ""}
                  </small>
                </p>
              </div>
            </div>
          </div>

          <ul className="list-group">
            {this.state.list.length ? (
              this.state.list.map((entry, index) => (
                <li className="list-group-item" key={this.state.id[index]}>
                  <a href="#" onClick={this.clickPlaylist}>
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
