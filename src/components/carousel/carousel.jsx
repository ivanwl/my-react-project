import React, { Component } from "react";
import placeholder_image from "../../assets/placeholder_image.jpg";
import "./style.css";
import SpotifyService from "../../services/spotifyService";

let spotifyService = new SpotifyService();

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { showControls: false, play: true };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handlePlayToggle = this.handlePlayToggle.bind(this);
  }

  handlePlayToggle() {
    this.setState({
      play: !this.state.play
    });
    this.state.play
      ? spotifyService.startPlaylist("", "")
      : spotifyService.pausePlayer();
  }

  handleMouseEnter() {
    this.setState({
      showControls: true
    });
  }

  handleMouseLeave() {
    this.setState({
      showControls: false
    });
  }

  render() {
    let carouselStyle = "carousel-item";
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        id="carouselControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {this.state.showControls && (
            <a
              id="backBtn"
              href="#!"
              onClick={this.props.handleCarouselBack}
              className="badge badge-pill badge-light"
            >
              {"<Back"}
            </a>
          )}
          {this.props.tracks.map((track, index) => (
            <div
              className={
                index === this.props.active
                  ? carouselStyle + "carousel-item active"
                  : carouselStyle
              }
              key={track.id}
            >
              <img
                className="d-block w-100"
                src={track.images ? track.images[0] : placeholder_image}
              />
              {this.state.showControls && (
                <div className="carousel-caption d-xs-block">
                  <b style={{ color: track.color, fontSize: "18px" }}>
                    {track.name}
                  </b>
                  <br />
                  <div className="progress" style={{ height: "2px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "1%" }}
                      aria-valuenow={"1"}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <br />
                  <a
                    href="#!"
                    onClick={this.handlePlayToggle}
                    className="badge badge-pill badge-light"
                  >
                    {this.state.play ? "||" : "<|"}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        {this.state.showControls && this.props.active !== 0 && (
          <a
            onClick={this.props.handleCarouselPrev}
            className="carousel-control-prev"
            href="#carouselControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
        )}
        {this.state.showControls &&
          this.props.active < this.props.tracks.length - 1 && (
            <a
              onClick={this.props.handleCarouselNext}
              className="carousel-control-next"
              href="#carouselControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          )}
      </div>
    );
  }
}
