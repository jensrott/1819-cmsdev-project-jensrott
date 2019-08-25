import { Component, OnInit } from "@angular/core";
import { FriendsService } from "../../../core/services/friends.service";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-friends-detail-page",
  templateUrl: "./friends-detail-page.component.html",
  styleUrls: ["./friends-detail-page.component.scss"]
})
export class FriendsDetailPageComponent implements OnInit {
  friend;
  longitude = "10.305385";
  latitude = "77.923029";
  url;
  constructor(
    private friendsService: FriendsService,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getSpecificFriend();
    this.displayLatitudeLongitude();
  }

  getSpecificFriend() {
    const id = this.route.snapshot.paramMap.get("id");
    this.friendsService.getSpecificFriend(id).subscribe(
      data => {
        this.friend = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  displayLatitudeLongitude() {
    let adresses = [
      {
        latitude: "51.00290520000001",
        longitude: "3.889669700000013"
      },
      {
        latitude: "51.05434220000001",
        longitude: "3.717424299999948"
      },
      {
        latitude: "50.8129259",
        longitude: "3.3326979999999367"
      }
    ];
    let randomAdress = adresses[Math.floor(Math.random() * adresses.length)];
    // console.log(rand.latitude);
    let url = `https://maps.google.com/maps?q=${randomAdress.latitude},${randomAdress.longitude}&hl=es;z=14&amp;output=embed`;
    // console.log(url);
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
