import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { User } from '../../../core/models/User';
import { SleepGoalsService } from '../../../core/services/sleep-goals.service';
import { ProvideSleepResultsService } from '../../../core/services/provide-sleep-results.service';
import * as moment from 'moment';

import { MatDialog, MatDialogRef } from '@angular/material';
import { ProvideSleepResultsComponent } from '../../components/provide-sleep-results/provide-sleep-results.component';
import { ShowSleepStatusComponent } from '../../components/show-sleep-status/show-sleep-status.component';
import { SleepGoalAchievedComponent } from '../../components/sleep-goal-achieved/sleep-goal-achieved.component';
import { ShowNoSleepGoalComponent } from '../../components/show-no-sleep-goal/show-no-sleep-goal.component';
import { SleepGoals } from '../../../core/models/SleepGoals';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // user: User;
  public loggedInUser;
  public messageShowedToday = false;

  private sleepresults1: any;  // the PostType data
  private acf_fields: any;
  private currentSleepResults: any;
  private averageSleepResult: any;
  private accSleepResult: any;
  private currentSleepResult: any;
  private num_acc: any;
  private currentSleepGoal: any;
  private currentSleepGoal1: any;
  private num = 4; // The number of days on which the average is calculated, after three days we get a result
  private i: number;

  constructor(private authService: AuthenticationService,
    private dialog: MatDialog,
    private sleepGoalsService: SleepGoalsService,
    private provideSleepResultsService: ProvideSleepResultsService,
  ) { }

  ngOnInit() {
    this.getCurrentUser(); // This way the username can be displayed in the home page
    // Only one message per day or per login
    // calculates the result for the day vs. sleep goal and displays a relevant message
    setTimeout(() => this.displaySleepStatus(), 1000);
  }


  displaySleepStatus(): void {

    this.provideSleepResultsService.getCurrentSleepResults().subscribe(data => {  // Get the most recent sleepresults from wordpress
      this.currentSleepResults = data; // Is an array with all sleep results for the user that is logged in

      this.num_acc = 0; // Aantal dagen dat je een resultaat hebt
      this.accSleepResult = 0; // Aantal uren dat je de laatste dagen in totaal geslapen hebt

      for (this.i = 0; this.i <= this.num; this.i++) {
        const day1 = moment(`${(this.currentSleepResults[this.i].acf.day)} ${(this.currentSleepResults[this.i].acf.sleep_time)} `,
          'DD/MM/YYYY hh:mm A'); // intermediate variable to be able the calculate the correct sleep day
        console.log(day1); // Datum + uur -> bv. 9 januari 22:00 uur


        const day3 = day1.subtract(1, 'days'); // a day earlier then the day you inserted in the database
        console.log(day3); // Datum + uur -> bv. 8 januari 22:00 uur
        const day2 = moment(`${(this.currentSleepResults[this.i].acf.day)} ${(this.currentSleepResults[this.i].acf.wake_up_time)} `,
          'DD/MM/YYYY hh:mm A');
        console.log(day2); // The day and the hour you woke up -> bv. 9 januari 08:00 uur.
        this.currentSleepResult = day2.diff(day3, 'hours', true);  // Difference between the wake_up_time (day2) and sleep_time (day3) is 10
        console.log(this.currentSleepResult);
        this.accSleepResult = this.accSleepResult + this.currentSleepResult; // 0 + 10
        if (this.currentSleepResult != null) { // If there is a sleep results
          this.num_acc = this.num_acc + 1; // Add one to the counter
          console.log(this.num_acc);
        }
      }

      // The average number of hours slept the last 3 days. bv. 10 + 10 + 10 = 30 / 3 = 10 uur gemiddeld geslapen
      this.averageSleepResult = this.accSleepResult / this.num_acc;

      localStorage.setItem('averageSleepResult', this.averageSleepResult);




      this.sleepGoalsService.getCurrentSleepGoal().subscribe(data1 => {
        this.currentSleepGoal = data1; // All sleepGoals for this user (ordered in time)
        console.log(this.currentSleepGoal);
        console.log(this.currentSleepGoal[0].acf.hours_per_day);
        // this.amount_sleep = 10;
        // this.sleepgoals = this.sleepGoalsService.getSleepGoal();
        this.currentSleepGoal1 = this.currentSleepGoal[0].acf.hours_per_day; // the most recent sleepGoal for the user logged in
        localStorage.setItem('sleepGoal_hours', this.currentSleepGoal1);


        console.log(this.averageSleepResult);
        console.log(this.currentSleepGoal1);

        const end_date = moment(`${(this.currentSleepGoal[0].acf.end_date)}`, 'DD/MM/YYYY');
        localStorage.setItem('sleepGoal_end_date', this.currentSleepGoal[0].acf.end_date);

        console.log(end_date);
        const now = moment();
        console.log(now);


        if ((moment(end_date).isBefore(now) || this.currentSleepGoal1 == null)) {  // Add also check for non-existing SleepGoal
          setTimeout(() => this.showNoSleepGoal());
        } else {
          if (this.averageSleepResult >= this.currentSleepGoal1) { // If You sleep more or equal to your goals you made your sleep goal
            setTimeout(() => this.showSuccesDialog()); // Show succes message, you made it!
          } else {
            setTimeout(() => this.showDailySleepStatus()); // Show your current hours slept and how much you still need to

          }
        }
      },
        err => {
          console.log(err);

        });

    },
      err => {
        console.log(err);
      });

  }

  // calcAverageSleep() {
  //   // Calculates the average sleep value (last week) to display vs the sleepGoal

  //   // Retrieve all sleep results from wordpress
  //   this.provideSleepResultsService.getCurrentSleepResults().subscribe(data => {
  //     this.currentSleepResults = data;

  //     const day1 = moment(`${(this.currentSleepResults[0].acf.day)} ${(this.currentSleepResults[0].acf.sleep_time)} `,
  //       'DD/MM/YYYY hh:mm A');
  //     console.log(day1);
  //     const day3 = day1.subtract(1, 'days');
  //     console.log(day3);
  //     const day2 = moment(`${(this.currentSleepResults[0].acf.day)} ${(this.currentSleepResults[0].acf.wake_up_time)} `,
  //       'DD/MM/YYYY hh:mm A');
  //     console.log(day2);
  //     this.averageSleepResult = day2.diff(day3, 'hours', true);
  //     console.log(this.averageSleepResult);
  //     localStorage.setItem('averageSleep', this.averageSleepResult);
  //   },
  //     err => {
  //       console.log(err);
  //     });

  // }

  // retrieveCurrentSleepGoal() {

  //   this.sleepGoalsService.getCurrentSleepGoal().subscribe(data => {
  //     this.currentSleepGoal = data; // All sleepGoals for this user (ordered in time)
  //     console.log(this.currentSleepGoal);
  //     console.log(this.currentSleepGoal[0].acf.hours_per_day);
  //     // this.amount_sleep = 10;
  //     // this.sleepgoals = this.sleepGoalsService.getSleepGoal();
  //     this.currentSleepGoal1 = this.currentSleepGoal[0].acf.hours_per_day; // the most recent sleepGoal for the user logged in.
  //   },
  //     err => {
  //       console.log(err);
  //     });
  // }



  showSuccesDialog(): void {
    const dialogRef = this.dialog.open(SleepGoalAchievedComponent, {
      width: '500px',
      // height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    dialogRef.updatePosition({ top: '150px', left: '30px' });
  }

  showNoSleepGoal(): void {
    const dialogRef = this.dialog.open(ShowNoSleepGoalComponent, {
      width: '500px',
      // height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    dialogRef.updatePosition({ top: '150px', left: '30px' });
  }

  showDailySleepStatus(): void {
    const dialogRef = this.dialog.open(ShowSleepStatusComponent, {
      width: '500px',
      // height: '550px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    dialogRef.updatePosition({ top: '150px', left: '30px' });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProvideSleepResultsComponent, {
      width: '500px',
      // height: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getCurrentUser(): void {
    this.authService.getCurrentUser().subscribe(data => {
      console.log(data);
      this.loggedInUser = data.name;
    });
  }
}
