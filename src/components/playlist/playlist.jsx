import React, { Component } from "react";
import Card from "../card/card";
import SpotifyService from "../../services/spotifyService";
import PlaylistModel from "../../models/playlistModel";
import TrackModel from "../../models/trackModel";
import "./style.css";
import Carousel from "../carousel/carousel";

let spotifyService = new SpotifyService();

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: false,
      showCarousel: false,
      showList: true,
      playlist: null,
      trackIndex: null,
      list: [],
      id: []
    };

    this.handleBack = this.handleBack.bind(this);
    this.expandCollapse = this.expandCollapse.bind(this);
    this.handleCarouselPrev = this.handleCarouselPrev.bind(this);
    this.handleCarouselNext = this.handleCarouselNext.bind(this);
    this.handleCarouselBack = this.handleCarouselBack.bind(this);
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

  handleBack() {
    spotifyService.getPlaylists().then(playlists => {
      this.setState({
        showCard: false,
        list: playlists.map(playlist => playlist.name),
        id: playlists.map(playlist => playlist.id)
      });
    });
  }

  handleTrack(id) {
    this.setState({
      showCard: false,
      showCarousel: true,
      trackIndex: this.state.playlist.tracks.reduce(
        (result, current, index) => {
          if (current.id === id) {
            result.push(index);
            spotifyService.startPlaylist(
              this.state.playlist.id,
              this.state.trackIndex
            );
          }
          return result;
        },
        []
      )[0]
    });
  }

  handleCarouselPrev() {
    if (this.state.trackIndex === 0) return;
    this.setState({
      trackIndex: --this.state.trackIndex
    });
    spotifyService.startPlaylist(this.state.playlist.id, this.state.trackIndex);
  }

  handleCarouselNext() {
    if (this.state.trackIndex === this.state.playlist.tracks.length - 1) return;
    this.setState({
      trackIndex: ++this.state.trackIndex
    });
    spotifyService.startPlaylist(this.state.playlist.id, this.state.trackIndex);
  }

  handleCarouselBack() {
    this.setState({
      showCard: true,
      showCarousel: false
    });
  }

  expandCollapse() {
    this.setState({
      showList: !this.state.showList
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="card mb-3 col-sm-4 col-md-3 p-0" max-width="540px">
          {this.state.showCard && (
            <React.Fragment>
              <button
                id="backBtn"
                type="button"
                onClick={this.handleBack}
                className="btn btn-primary col-sm-4"
              >
                {"< Back"}
              </button>
              <Card playlist={this.state.playlist} />
            </React.Fragment>
          )}

          {this.state.showCarousel && (
            <Carousel
              tracks={this.state.playlist.tracks}
              active={this.state.trackIndex}
              handleCarouselPrev={this.handleCarouselPrev}
              handleCarouselNext={this.handleCarouselNext}
              handleCarouselBack={this.handleCarouselBack}
            />
          )}

          {this.state.showList && (
            <ul className="list-group">
              {this.state.list.length ? (
                this.state.list.map((entry, index) => (
                  <li
                    className="list-group-item"
                    style={{
                      backgroundColor:
                        this.state.showCarousel &&
                        this.state.trackIndex === index
                          ? this.state.playlist.tracks[index].color
                            ? this.state.playlist.tracks[index].color
                            : "#007bff"
                          : ""
                    }}
                    key={this.state.id[index]}
                  >
                    <a
                      href="#!"
                      onClick={() =>
                        this.state.showCard || this.state.showCarousel
                          ? this.handleTrack(this.state.id[index])
                          : this.handlePlaylist(this.state.id[index])
                      }
                    >
                      <b>{entry}</b>
                    </a>
                  </li>
                ))
              ) : (
                <li className="list-group-item">No Playlist</li>
              )}
            </ul>
          )}
          <a onClick={this.expandCollapse} href="#!" id="listButton">
            {this.state.showList ? "∧" : "∨"}
          </a>
        </div>
      </React.Fragment>
    );
  }
}
