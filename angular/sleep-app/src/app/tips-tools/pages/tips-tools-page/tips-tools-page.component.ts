import { Component, OnInit } from "@angular/core";
import { TipsToolsService } from "../../../core/services/tips-tools.service";
import { AuthenticationService } from "../../../core/services/authentication.service";

@Component({
  selector: "app-tips-tools-page",
  templateUrl: "./tips-tools-page.component.html",
  styleUrls: ["./tips-tools-page.component.scss"]
})
export class TipsToolsPageComponent implements OnInit {
  icon;
  tips_tools1;
  tips_tools;
  users;
  constructor(
    private tipstoolsService: TipsToolsService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.getAllTipsTools();
    // console.log(this.tips_tools);
  }

  searchTipsTools(term) {}

  getAllTipsTools() {
    this.tipstoolsService.getAllTipsTools().subscribe(
      data => {
        this.tips_tools = data;
        console.log(this.tips_tools);
        console.log(this.tips_tools[0].title);
        this.tips_tools1 = this.tips_tools;
      },
      err => {
        console.log(err);
      }
    );
  }

  // TODO Fix this
  addLike() {
    this.icon = document.querySelector(".icon-heart");
    console.log(this.icon);
    this.icon.classList.remove("ion-ios-heart-outline");
    this.icon.classList.add("ion-ios-heart");
  }

  removeLike() {
    this.icon = document.querySelector(".icon-heart");
    this.icon.classList.remove("ion-ios-heart");
    this.icon.classList.add("ion-ios-heart-outline");
  }
}
