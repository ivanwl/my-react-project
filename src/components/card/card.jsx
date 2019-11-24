import React, { Component } from "react";
import placeholder_image from "../../assets/placeholder_image.jpg";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      author: null,
      description: null,
      followers: null
    };
  }
  render() {
    return (
      <div className="row no-gutters">
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
    );
  }
}
