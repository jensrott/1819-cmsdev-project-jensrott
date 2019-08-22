import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MemesService {
  private _corsAnywhere = "https://cors-anywhere.herokuapp.com/";

  private _apiMemesLink = "https://api.imgflip.com/get_memes";
  private _apiMoreMemesLink = `${
    this._corsAnywhere
  }http://alpha-meme-maker.herokuapp.com/`;
  constructor(private _httpClient: HttpClient) {}

  getMemes(): Observable<any> {
    return this._httpClient.get(`${this._apiMemesLink}`);
  }

  getMoreMemes(): Observable<any> {
    return this._httpClient.get(`${this._apiMoreMemesLink}`);
  }
}
