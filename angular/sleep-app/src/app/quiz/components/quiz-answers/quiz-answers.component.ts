import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { QuizData } from "../../../core/interfaces/QuizData";

@Component({
  selector: "app-quiz-answers",
  templateUrl: "./quiz-answers.component.html",
  styleUrls: ["./quiz-answers.component.scss"]
})
export class QuizAnswersComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<QuizAnswersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuizData
  ) {}

  ngOnInit() {}

  onCloseCancel() {
    this.dialogRef.close("Cancel");
  }
}
