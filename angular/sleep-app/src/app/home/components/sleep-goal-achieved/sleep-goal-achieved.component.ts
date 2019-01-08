import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sleep-goal-achieved',
  templateUrl: './sleep-goal-achieved.component.html',
  styleUrls: ['./sleep-goal-achieved.component.scss']
})
export class SleepGoalAchievedComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SleepGoalAchievedComponent>) { }

  ngOnInit() {
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

}
