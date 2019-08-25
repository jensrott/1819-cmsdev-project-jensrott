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
  loading: boolean = true;
  showMore: boolean = false;

  constructor(private _memesService: MemesService) {}

  ngOnInit() {
    this.getMemes();
  }

  getMemes() {
    this._memesService.getMemes().subscribe(data => {
      // console.log(data);
      this.memes = data.data;
      this.lessMemes = this.memes.memes.splice(90);
      this.loading = false;
    });
  }

  showMoreMemes() {
    // Other memes api
    this.showMore = true;
    this.loading = true;
    this._memesService.getMoreMemes().subscribe(data => {
      console.log(data);
      this.memes = data.data;
      // console.log(this.memes);
      /* Random number between 1 en 20 */
      let randomNumber = Math.floor(Math.random() * 20) + 1;
      console.log(randomNumber);
      this.moreMemes = this.memes.splice(randomNumber);

      this.loading = false;

      // With rank we can sort maybe...
    });
  }
}
