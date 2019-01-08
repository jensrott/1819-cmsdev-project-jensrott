import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-show-sleep-status',
  templateUrl: './show-sleep-status.component.html',
  styleUrls: ['./show-sleep-status.component.scss']
})
export class ShowSleepStatusComponent implements OnInit {

  private sleepGoal_hours: any;
  private averageSleepResult: any;
  private toGo: any;

  constructor(public dialogRef: MatDialogRef<ShowSleepStatusComponent>) { }

  ngOnInit() {
    this.sleepGoal_hours = localStorage.getItem('sleepGoal_hours');
    this.averageSleepResult = localStorage.getItem('averageSleepResult');
    this.toGo = this.sleepGoal_hours - this.averageSleepResult;
    this.toGo = this.toGo.toFixed(2);
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

}
