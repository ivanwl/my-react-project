import React, { Component } from "react";
import placeholder_image from "../../assets/placeholder_image.jpg";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { play: true };

    this.handlePlayToggle = this.handlePlayToggle.bind(this);
  }

  handlePlayToggle() {
    this.setState({
      play: !this.state.play
    });
  }

  render() {
    let carouselStyle = "carousel-item";
    return (
      <div
        id="carouselControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
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
            </div>
          ))}
        </div>
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
      </div>
    );
  }
}
