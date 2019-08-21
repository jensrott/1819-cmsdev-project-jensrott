import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { TipsToolsService } from "../../../core/services/tips-tools.service";

@Component({
  selector: "app-tips-detail-page",
  templateUrl: "./tips-detail-page.component.html",
  styleUrls: ["./tips-detail-page.component.scss"]
})
export class TipsDetailPageComponent implements OnInit {
  tip;
  constructor(
    private tipstoolsService: TipsToolsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getSpecificTipTool();
  }

  getSpecificTipTool() {
    const id = this.route.snapshot.paramMap.get("id");
    this.tipstoolsService.getSpecificTipsTool(id).subscribe(data => {
      // console.log(data);
      this.tip = data;
    });
  }
}
