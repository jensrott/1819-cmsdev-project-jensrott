import { Component, OnInit } from "@angular/core";

import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-videos-page",
  templateUrl: "./videos-page.component.html",
  styleUrls: ["./videos-page.component.scss"]
})
export class VideosPageComponent implements OnInit {
  safeURL;
  videoURL;
  constructor(private _sanitizer: DomSanitizer) {
    this.videoURL = "https://www.youtube.com/embed/1ozGKlOzEVc";
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.videoURL
    );
  }

  ngOnInit() {}
}
