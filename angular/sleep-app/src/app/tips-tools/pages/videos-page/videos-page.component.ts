import { Component, OnInit } from "@angular/core";

import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-videos-page",
  templateUrl: "./videos-page.component.html",
  styleUrls: ["./videos-page.component.scss"]
})
export class VideosPageComponent implements OnInit {
  videoURLs: Array<string>;

  constructor(private _sanitizer: DomSanitizer) {
    this.videoURLs = [
      "https://www.youtube.com/embed/ZKNQ6gsW45M",
      "https://www.youtube.com/embed/g1CWinr5AkI",
      "https://www.youtube.com/embed/EiYm20F9WXU",
      "https://www.youtube.com/embed/3eLfn7Ewx_s",
      "https://www.youtube.com/embed/2wLCzrfdUOI"
    ];
  }

  ngOnInit() {}
}
