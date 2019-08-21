import { Component, OnInit } from "@angular/core";
import { MemesService } from "../../../core/services/memes.service";

@Component({
  selector: "app-memes-page",
  templateUrl: "./memes-page.component.html",
  styleUrls: ["./memes-page.component.scss"]
})
export class MemesPageComponent implements OnInit {
  memes;
  lessMemes;
  constructor(private _memesService: MemesService) {}

  ngOnInit() {
    this.getMemes();
  }

  getMemes() {
    this._memesService.getMemes().subscribe(data => {
      console.log(data);
      this.memes = data.data;
      this.lessMemes = this.memes.memes.splice(90);
      console.log(this.lessMemes); // TODO more or less memes filter
    });
  }
}
