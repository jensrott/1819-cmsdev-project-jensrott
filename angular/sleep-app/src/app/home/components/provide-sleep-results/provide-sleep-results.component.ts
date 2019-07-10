import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SleepResults } from '../../../core/models/SleepResults';
import { ProvideSleepResultsService } from '../../../core/services/provide-sleep-results.service';
import { SleepGoalsService } from '../../../core/services/sleep-goals.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-sleep-goal',
  templateUrl: './provide-sleep-results.component.html',
  styleUrls: ['./provide-sleep-results.component.scss']
})
export class ProvideSleepResultsComponent implements OnInit {

  // Component to input the sleep hours for a day
  // and to verify the current status (average sleep hours the last week) vs the sleep goal

  public loggedInUser;

  private sleepresults: SleepResults = { day: '', sleep_time: '', wake_up_time: '' };  // the ACF fields
  private sleepresults1: any;  // the PostType data
  private acf_fields: any;
  private currentSleepResults: any;
  private averageSleepResult: any;
  private accSleepResult: any;
  private currentSleepResult: any;
  private num_acc: any;
  private currentSleepGoal: any;
  private currentSleepGoal1: any;
  private num = 4;
  private i: number;


  constructor(public dialogRef: MatDialogRef<ProvideSleepResultsComponent>,
    private provideSleepResultsService: ProvideSleepResultsService,
    private sleepGoalsService: SleepGoalsService,
    private router: Router) { }

  ngOnInit() {
    this.sleepresults.day = new Date().toISOString().split('T')[0];
    this.sleepresults.sleep_time = '22:00';
    this.sleepresults.wake_up_time = '08:00';
    this.calcAverageSleep();
    this.retrieveCurrentSleepGoal();
  }

  addSleepResults() { // Two-step approach needed, two times subscribe
    // Adds the sleep results in the database
    this.provideSleepResultsService.createSleepResultsPostType().subscribe(data => { // Create new Sleep-result in PostType
      this.sleepresults1 = data;
      this.provideSleepResultsService.createSleepResultsAcf(this.sleepresults1.id, // Write the ACF fields in the Sleep-goal PostType
        this.sleepresults.day, this.sleepresults.sleep_time, this.sleepresults.wake_up_time).subscribe(data1 => {
          this.acf_fields = data1;
          console.log(data1);
          this.router.navigate(['/home']);
        },
          err => {
            console.log(err);
          });
    },
      err => {
        console.log(err);
      });

  }

  calcAverageSleep() {
    // Calculates the average sleep value (last week) to display vs the sleepGoal

    // Retrieve all sleep results from wordpress
    this.provideSleepResultsService.getCurrentSleepResults().subscribe(data => {
      this.currentSleepResults = data;
      this.num_acc = 0;
      this.accSleepResult = 0;
      for (this.i = 0; this.i <= this.num; this.i++) {
        const day1 = moment(`${(this.currentSleepResults[this.i].acf.day)} ${(this.currentSleepResults[this.i].acf.sleep_time)} `,
          'DD/MM/YYYY hh:mm A');
        console.log(day1);
        const day3 = day1.subtract(1, 'days'); // dayTime you went to bed
        console.log(day3);
        const day2 = moment(`${(this.currentSleepResults[this.i].acf.day)} ${(this.currentSleepResults[this.i].acf.wake_up_time)} `,
          'DD/MM/YYYY hh:mm A');  // dayTime you woke up
        console.log(day2);
        this.currentSleepResult = day2.diff(day3, 'hours', true);  // Number of hours you slept that day
        console.log(this.currentSleepResult);
        this.accSleepResult = this.accSleepResult + this.currentSleepResult;
        if (this.currentSleepResult != null) {
          this.num_acc = this.num_acc + 1;
          console.log(this.num_acc);
        }
      }
      this.averageSleepResult = this.accSleepResult / this.num_acc; // The average number of hours slept the last 5 days.
      localStorage.setItem('averageSleepResult', this.averageSleepResult);
    },
      err => {
        console.log(err);
      });

  }

  retrieveCurrentSleepGoal() {

    this.sleepGoalsService.getCurrentSleepGoal().subscribe(data => {
      this.currentSleepGoal = data; // All sleepGoals for this user (ordered in time)
      console.log(this.currentSleepGoal);
      console.log(this.currentSleepGoal[0].acf.hours_per_day);
      // this.amount_sleep = 10;
      // this.sleepgoals = this.sleepGoalsService.getSleepGoal();
      this.currentSleepGoal1 = this.currentSleepGoal[0].acf.hours_per_day; // the most recent sleepGoal for the user logged in.
    },
      err => {
        console.log(err);
      });
  }

  onCloseConfirm() {
    this.dialogRef.close('Confirm');
    this.addSleepResults();

  }
  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }



}
