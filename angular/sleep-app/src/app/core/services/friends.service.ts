import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class FriendsService {
  private _apiAllFriends =
    environment.wpAPI.url + environment.wpAPI.endPoints.Friends;

  private _apiSpecificFriends = "http://localhost/wp-json/wp/v2/friends";

  private object: any;
  constructor(private _httpClient: HttpClient) {}

  // Endpoint: http://localhost/wp-json/wp/v2/friends
  // Retrieve all Friends from the Custom Post Type endpoint
  // using ?_embed allows to get hold of author meta data
  // using acf allows to get hold of image

  getAllFriends() {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*"
      })
    };
    return this._httpClient.get<any>(
      `${this._apiAllFriends}?_embed`,
      httpOptions
    );
  }

  // Endpoint: http://localhost/wp-json/wp/v2/friends/{id}
  getSpecificFriend(id): Observable<any> {
    return this._httpClient.get(`${this._apiSpecificFriends}/${id}`);
  }
}
