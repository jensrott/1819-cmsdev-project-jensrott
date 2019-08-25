import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-tips-empty-answers",
  templateUrl: "./tips-empty-answers.component.html",
  styleUrls: ["./tips-empty-answers.component.scss"]
})
export class TipsEmptyAnswersComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<TipsEmptyAnswersComponent>) {}

  ngOnInit() {}

  onCloseCancel() {
    this.dialogRef.close("Cancel");
  }
}
