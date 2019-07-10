import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { TipsToolsService } from "../../../core/services/tips-tools.service";

@Component({
  selector: "app-tips-tools-detail-page",
  templateUrl: "./tips-tools-detail-page.component.html",
  styleUrls: ["./tips-tools-detail-page.component.scss"]
})
export class TipsToolsDetailPageComponent implements OnInit {
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
      console.log(data);
    });
  }
}
