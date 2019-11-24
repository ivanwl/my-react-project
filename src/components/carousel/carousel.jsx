import React, { Component } from "react";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <img className="d-block w-100" src={track.images[0]} />
            </div>
          ))}
        </div>
        <a
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
          onClick={this.props.carouselNextHandler}
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
