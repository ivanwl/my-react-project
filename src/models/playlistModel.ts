import React, { Component } from "react";

export default class Playlist {
  name: string;
  description: string;
  url: string;
  followers: number;
  id: string;
  images: string[] = [];
  owner: string;
  color: string;

  constructor(object: any) {
    let playlist = object;
    this.name = playlist.name;
    this.description = playlist.description;
    this.url = playlist.href;
    playlist.array.forEach((image: any) => {
      this.images.push(image.url);
    });
    this.followers = playlist.followers;
    this.id = playlist.id;
    this.owner = playlist.owner.display_name;
    this.color = playlist.primary_color;
  }
}
