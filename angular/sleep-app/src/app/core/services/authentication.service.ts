import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  constructor(private _httpClient: HttpClient) {
  }

  // moet eigenlijk dit zijn: url = 'https://jensrott.cmsdevelopment.be/wp-json/wp/v2/';
  private _apiLogin = environment.wpAPI.authUrl + environment.wpAPI.endPoints.token;
  private _apiRegister = environment.wpAPI.url + environment.wpAPI.endPoints.register;
  private _apiCurrentUser = environment.wpAPI.url + environment.wpAPI.endPoints.me;
  private _apiUsers = environment.wpAPI.url + environment.wpAPI.endPoints.users;

  // Endpoint: http://localhost/wp-json/jwt-auth/v1/token
  loginUser(email, password) {
    // Put body with data in a post request
    const formData = new FormData();
    formData.append('username', email); // We use email as username
    formData.append('password', password);
    console.log(formData);
    return this._httpClient.post<any>(`${this._apiLogin}`, formData);
  }

  // Endpoint: http://localhost/wp-json/wp/v2/users/register
  registerUser(username, firstname, lastname, email, password) {
    console.log(username, firstname, lastname, email, password);
    const formData = new FormData();

    formData.append('username', username);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('password', password);
    return this._httpClient.post<any>(`${this._apiRegister}`, formData);
  }

  // Endpoint: http://localhost/wp-json/wp/v2/users/me
  getCurrentUser() {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this._httpClient.get<any>(`${this._apiCurrentUser}`, httpOptions);
  }

  getUsers() {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this._httpClient.get<any>(`${this._apiUsers}`, httpOptions);
  }

  getSpecificUser(id): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this._httpClient.get(`${this._apiUsers}/${id}`);
  }

  logout() {
    localStorage.clear();
  }

}
