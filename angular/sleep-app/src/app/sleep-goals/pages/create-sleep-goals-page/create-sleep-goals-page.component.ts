import { Component, OnInit } from '@angular/core';
import { SleepGoals } from '../../../core/models/SleepGoals';
import { SleepGoalsService } from '../../../core/services/sleep-goals.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sleep-goals-page',
  templateUrl: './create-sleep-goals-page.component.html',
  styleUrls: ['./create-sleep-goals-page.component.scss']
})
export class CreateSleepGoalsPageComponent implements OnInit {
  sleep_goals: SleepGoals = { hours_per_day: 8, end_date: new Date };
  sleep_goals1: any;
  acf_fields: any;

  constructor(private sleepGoalsService: SleepGoalsService, private router: Router) { }

  ngOnInit() {
  }

  createSleepGoal() { // Two-step approach needed
    this.sleepGoalsService.createSleepGoalPostType().subscribe(data => { // Create new Sleep-goal in PostType
      this.sleep_goals1 = data;
      console.log(this.sleep_goals1);
      console.log(this.sleep_goals1.id);
      console.log(data);
      this.sleepGoalsService.createSleepGoalAcf(this.sleep_goals1.id, // Write the ACF fields in the Sleep-goal PostType
        this.sleep_goals.hours_per_day, this.sleep_goals.end_date).subscribe(data1 => {
          this.acf_fields = data;
          console.log(data1);
          localStorage.setItem('sleepGoal_hours', this.sleep_goals.hours_per_day.toString());
          localStorage.setItem('sleepGoal_end_date', this.sleep_goals.end_date.toString());


          this.router.navigate(['/profile']);
        },
          err => {
            console.log(err);
          });
    },
      err => {
        console.log(err);
      });
  }
}
