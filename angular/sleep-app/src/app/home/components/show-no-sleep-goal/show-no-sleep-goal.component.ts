import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-show-no-sleep-goal',
  templateUrl: './show-no-sleep-goal.component.html',
  styleUrls: ['./show-no-sleep-goal.component.scss']
})
export class ShowNoSleepGoalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ShowNoSleepGoalComponent>) { }

  ngOnInit() {
  }
  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }
}
