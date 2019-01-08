import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SleepResults } from '../../core/models/SleepResults';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProvideSleepResultsService {

  private _apiAcfSleepResults = environment.wpAPI.url + environment.wpAPI.endPoints.acfSleep_results;
  private _apiPostTypeSleepResults = environment.wpAPI.url + environment.wpAPI.endPoints.sleep_results;

  private object: any;



  constructor(private _httpClient: HttpClient) { }
  // Endpoint: http://localhost/wp-json/wp/v2/sleep-results
  createSleepResultsPostType(): Observable<any> {

    // Creates a new Sleep-results PostType for the current user as a placeholder to add custom fields in a 2nd call
    console.log(this._apiAcfSleepResults);
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      })
    };
    this.object = {
      title: 'Yet another Sleep-Result',
      content: 'Yet another Sleep-Result',
      author: localStorage.getItem('user_id'),
      status: 'publish',
    };
    return this._httpClient.post(`${this._apiPostTypeSleepResults}`, this.object, httpOptions);
  }

  // Endpoint: http://localhost/wp-json/acf/v3/sleep-results/{post_id}
  createSleepResultsAcf(post_id, day, sleep_time, wake_up_time): Observable<any> {

    // Writes the acf fields to the sleep-goal post, created with createSleepGoalPostType
    console.log(this._apiAcfSleepResults);
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      })
    };

    this.object = {
      fields: {
        day: day,
        sleep_time: sleep_time,
        wake_up_time: wake_up_time
      }
    };
    return this._httpClient.post(`${this._apiAcfSleepResults}/${post_id}`, this.object, httpOptions);
  }

  // Endpoint: http://localhost/wp-json/wp/v2/sleep-results
  getSleepResults(): Observable<any> {
    return this._httpClient.get(`${this._apiPostTypeSleepResults}`);
  }

  // Endpoint: http://localhost/wp-json/wp/v2/sleep-results?author={author_id}
  getCurrentSleepResults(): Observable<any> {
    const author_id = localStorage.getItem('user_id');
    return this._httpClient.get(`${this._apiPostTypeSleepResults}?author=${author_id}`);
  }

}


