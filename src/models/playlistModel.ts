import React, { Component } from "react";
import TrackModel from "./trackModel";

export default class Playlist {
  name: string;
  description: string;
  url: string;
  followers: number = 0;
  id: string;
  images: string[];
  owner: string;
  color: string;
  tracks: TrackModel[] = [];

  constructor(object: any) {
    let playlist = object;
    this.name = playlist.name;
    this.description = playlist.description;
    this.url = playlist.external_urls.spotify;
    this.images = playlist.images.map((image: any) => image.url);
    if (playlist.followers) this.followers = playlist.followers.total;
    this.id = playlist.id;
    this.owner = playlist.owner.display_name;
    this.color = playlist.primary_color;
    if (playlist.tracks.items)
      this.tracks = playlist.tracks.items.map(
        (track: any) => new TrackModel(track.track)
      );
  }
}
