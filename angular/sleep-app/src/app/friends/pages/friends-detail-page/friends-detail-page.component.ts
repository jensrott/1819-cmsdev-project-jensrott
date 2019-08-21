import { Component, OnInit } from "@angular/core";
import { FriendsService } from "../../../core/services/friends.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-friends-detail-page",
  templateUrl: "./friends-detail-page.component.html",
  styleUrls: ["./friends-detail-page.component.scss"]
})
export class FriendsDetailPageComponent implements OnInit {
  friend;
  constructor(
    private friendsService: FriendsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getSpecificFriend();
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
}
