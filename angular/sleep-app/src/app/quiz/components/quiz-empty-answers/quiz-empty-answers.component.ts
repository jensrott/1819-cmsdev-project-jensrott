import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-quiz-empty-answers",
  templateUrl: "./quiz-empty-answers.component.html",
  styleUrls: ["./quiz-empty-answers.component.scss"]
})
export class QuizEmptyAnswersComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<QuizEmptyAnswersComponent>) {}

  ngOnInit() {}

  onCloseCancel() {
    this.dialogRef.close("Cancel");
  }
}
