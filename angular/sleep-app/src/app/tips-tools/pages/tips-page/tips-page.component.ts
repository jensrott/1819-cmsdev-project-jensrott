import { Component, OnInit } from "@angular/core";
import { TipsToolsService } from "../../../core/services/tips-tools.service";

import * as _ from "lodash";

@Component({
  selector: "app-tips-page",
  templateUrl: "./tips-page.component.html",
  styleUrls: ["./tips-page.component.scss"]
})
export class TipsPageComponent implements OnInit {
  icon;
  tips_tools1;
  tips_tools;
  users;

  // filter data by author
  filteredDatas;
  newFilteredData: boolean = false;

  show: boolean = true;

  constructor(private tipstoolsService: TipsToolsService) {}

  ngOnInit() {
    this.getAllTipsTools();
  }

  searchTipsTools(term) {}

  getAllTipsTools() {
    this.tipstoolsService.getAllTipsTools().subscribe(
      data => {
        let sortedData = _.orderBy(data, ["date_gmt"], ["asc"]); // Sort by date
        console.log(sortedData);
        this.tips_tools = sortedData;
        // console.log(this.tips_tools);
        // console.log(this.tips_tools[0].title);
        // this.tips_tools1 = this.tips_tools;
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

  toggle() {
    this.show = !this.show;
  }

  calculateMostLikes() {}

  filterByAuthor(id: number) {
    // console.log(id); // now we use this id to filter and we make a new request
    this.newFilteredData = true;
    this.tipstoolsService.filterByAuthor(id).subscribe(data => {
      console.log(data);
      let sortedData = _.orderBy(data, ["date_gmt"], ["asc"]); // Sort by date, TODO: find a way I can put this in one place so I don't need to place this always again
      this.filteredDatas = sortedData; // Now we have to replace all the data that is now there with this data
    });
  } // Can make it later sort by anything else
}
