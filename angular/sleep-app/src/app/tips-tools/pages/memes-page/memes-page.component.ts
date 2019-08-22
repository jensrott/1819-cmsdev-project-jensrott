import { Component, OnInit } from "@angular/core";
import { MemesService } from "../../../core/services/memes.service";

import * as _ from "lodash";

@Component({
  selector: "app-memes-page",
  templateUrl: "./memes-page.component.html",
  styleUrls: ["./memes-page.component.scss"]
})
export class MemesPageComponent implements OnInit {
  memes;
  lessMemes;
  moreMemes;
  loading: boolean = false;
  showMore: boolean = false;

  // TODO: add loading!!!

  constructor(private _memesService: MemesService) {}

  ngOnInit() {
    this.getMemes();
    // this.showMoreMemes();
  }

  getMemes() {
    this._memesService.getMemes().subscribe(data => {
      // console.log(data);
      this.memes = data.data;
      this.lessMemes = this.memes.memes.splice(90);
      // console.log(this.lessMemes); // TODO more or less memes filter
    });
  }

  showMoreMemes() {
    // Other memes api
    this.showMore = true;
    this._memesService.getMoreMemes().subscribe(data => {
      console.log(data);
      this.memes = data.data;
      // console.log(this.memes);
      // Random number between 10 en 20
      let randomNumber = Math.floor(Math.random() * 20) + 1;
      console.log(randomNumber);
      this.moreMemes = this.memes.splice(randomNumber);

      // With rank we can sort maybe...
    });
  }
}
