import React, { Component } from "react";
import placeholder_image from "../../assets/placeholder_image.jpg";
import "./style.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row no-gutters">
        <div className="col-sm-4">
          <img
            src={
              this.props.playlist.images
                ? this.props.playlist.images[
                    Math.floor(
                      Math.random() * this.props.playlist.images.length
                    )
                  ]
                : placeholder_image
            }
            width="150"
            height="150"
            className="card-img pt-5"
          />
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h6 className="card-title">
              {this.props.playlist.name ? this.props.playlist.name : ""}
            </h6>
            <p className="card-text">
              {this.props.playlist.description
                ? this.props.playlist.description
                : ""}
              <br />
              {this.props.playlist.author ? this.props.playlist.author : ""}
            </p>
            <p className="card-text">
              <small className="text-muted">
                Followers: {this.props.playlist.followers}
                {this.props.playlist.follower
                  ? this.props.playlist.follower
                  : ""}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
