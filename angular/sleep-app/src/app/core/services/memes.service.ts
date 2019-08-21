import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MemesService {
  private _apiMemesLink = "https://api.imgflip.com/get_memes";
  constructor(private _httpClient: HttpClient) {}

  getMemes(): Observable<any> {
    return this._httpClient.get(`${this._apiMemesLink}`);
  }
}
