import React, { Component } from "react";
import placeholder_image from "../../assets/placeholder_image.jpg";

export default class Playlist extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card mb-3" max-width="540px">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={placeholder_image}
                width="50"
                height="200"
                className="card-img"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>

          <ul className="list-group">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
