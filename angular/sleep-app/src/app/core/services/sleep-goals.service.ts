import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SleepGoals } from '../../core/models/SleepGoals';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SleepGoalsService {

  private _apiAcfSleepGoals = environment.wpAPI.url + environment.wpAPI.endPoints.acfSleep_goals;
  private _apiPostTypeSleepGoals = environment.wpAPI.url + environment.wpAPI.endPoints.sleep_goals;

  private object: any;

  constructor(private _httpClient: HttpClient) { }


  // Endpoint: http://localhost/wp-json/wp/v2/sleep-goals
  createSleepGoalPostType(): Observable<any> {

    // Creates a new SleepGoal PostType for the current user as a placeholder to add custom fields in a 2nd call
    console.log(this._apiAcfSleepGoals);
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      })
    };
    this.object = {
      title: 'Yet another Sleep-Goal',
      content: 'Yet another Sleep-Goal',
      author: localStorage.getItem('user_id'),
      status: 'publish',
    };
    return this._httpClient.post(`${this._apiPostTypeSleepGoals}`, this.object, httpOptions);
  }

  // Endpoint: http://localhost/wp-json/acf/v3/sleep-goals/{post_id}
  createSleepGoalAcf(post_id, hours_per_day, end_date): Observable<any> {

    // Writes the acf fields to the sleep-goal post, created with createSleepGoalPostType
    console.log(this._apiAcfSleepGoals);
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      })
    };

    this.object = {
      fields: {
        hours_per_day: hours_per_day,
        end_date: end_date
      }
    };
    return this._httpClient.post(`${this._apiAcfSleepGoals}/${post_id}`, this.object, httpOptions);
  }

  // Endpoint: http://localhost/wp-json/wp/v2/sleep-goals
  getSleepGoals(): Observable<any> {
    return this._httpClient.get(`${this._apiPostTypeSleepGoals}`);
  }

  // Endpoint: http://localhost/wp-json/wp/v2/sleep-goals?author=author_id
  getCurrentSleepGoal(): Observable<any> {
    const token = localStorage.getItem('token');
    const author_id = localStorage.getItem('user_id');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this._httpClient.get(`${this._apiPostTypeSleepGoals}?author=${author_id}`);
  }


}
