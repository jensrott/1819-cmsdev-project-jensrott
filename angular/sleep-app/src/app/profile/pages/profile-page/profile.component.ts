import { Component, OnInit } from '@angular/core';
import { SleepGoalsService } from '../../../core/services/sleep-goals.service';
import { SleepGoals } from '../../../core/models/SleepGoals';
import { User } from '../../../core/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hours_per_day: number;
  end_date: Date;
  sleepgoals: SleepGoals;

  private user: User = {
    id: '', name: '', password: '', email: '', firstname: '',
    lastname: '', nicename: '', display_name: '', sleeptype: '', sleeptype_text: '', sleeptype_image: '',
  };
  private currentSleepGoal: any;

  constructor(private sleepGoalsService: SleepGoalsService) { }

  ngOnInit() {
    this.sleepGoalsService.getCurrentSleepGoal().subscribe(data => {
      this.currentSleepGoal = data;
      console.log(this.currentSleepGoal);
      console.log(this.currentSleepGoal[0].acf.hours_per_day);
      this.hours_per_day = this.currentSleepGoal[0].acf.hours_per_day; // the most recent sleepGoal for the user logged in.
      this.end_date = this.currentSleepGoal[0].acf.end_date;
      // localStorage is used as a global variable for the currently logged in user
      this.user.email = localStorage.getItem('user_email');
      this.user.name = localStorage.getItem('user_name');
      this.user.sleeptype = localStorage.getItem('user_sleeptype');
      console.log(this.hours_per_day);

    },
      err => {
        console.log(err);
      });
  }
}
