import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-show-no-sleep-goal",
  templateUrl: "./show-no-sleep-goal.component.html",
  styleUrls: ["./show-no-sleep-goal.component.scss"]
})
export class ShowNoSleepGoalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ShowNoSleepGoalComponent>,
    private router: Router
  ) {}

  ngOnInit() {}
  onCloseCancel() {
    this.dialogRef.close("Cancel");
  }
  CreateNewSleepGoal() {
    this.router.navigate(["/create-sleep-goals"]);
    this.onCloseCancel();
  }
}
