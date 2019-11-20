import React, { Component } from "react";

export default class Song {
  id: string;
  images: string[] = [];
  name: string;
  owner: string;
  ownerId: string;
  constructor(object: any) {
    this.id = object.id;
    object.images.forEach((element: any) => {
      this.images.push(element.url);
    });
    this.name = object.name;
    this.owner = object.owner.display_name;
    this.ownerId = object.owner.id;
  }
}
