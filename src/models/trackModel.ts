import React, { Component } from "react";

export default class TrackModel {
  id: string;
  images: string[];
  name: string;
  artist: string;
  url: string;
  duration_ms: number;
  color: string;

  constructor(object: any) {
    let track = object.track;
    this.id = track.id;
    this.images = track.album.images.map((image: any) => image.url);
    this.name = track.name;
    track.artists[0]
      ? (this.artist = track.artists[0].name)
      : (this.artist = "");
    this.url = track.external_urls.spotify;
    this.duration_ms = track.duration_ms;
    this.color = object.primary_color;
  }

  parseDuration(): string {
    let durationInSeconds = parseInt((this.duration_ms / 1000).toFixed());
    if (durationInSeconds < 60) return durationInSeconds.toString();
    let minutes = parseInt((durationInSeconds / 60).toFixed());
    let hour = "";
    if (minutes >= 60) {
      hour = (minutes / 60).toFixed() + ":";
      minutes %= 60;
    }
    let seconds = durationInSeconds % 60;
    return hour + minutes + ":" + seconds;
  }
}
