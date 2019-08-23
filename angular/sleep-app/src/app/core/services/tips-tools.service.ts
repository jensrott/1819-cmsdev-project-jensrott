import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TipsToolsService {
  // TODO: clean this up, make it more clear
  private _apiAllTipsTools =
    environment.wpAPI.url + environment.wpAPI.endPoints.tips_tools;
  // private _apiSpecificTipTool = environment.wpAPI.url + environment.wpAPI.endPoints.tips_tools;
  private _apiSpecificTipTool = "http://localhost/wp-json/wp/v2/tips-tools";
  private _apiAddTipsTool =
    environment.wpAPI.url + environment.wpAPI.endPoints.tips_tools;

  private _apiFilterTipsTools =
    "http://localhost/wp-json/wp/v2/tips-tools?author=";

  private object: Object;

  constructor(private _httpClient: HttpClient) {}

  // Endpoint: http://localhost/wp-json/wp/v2/tips-tools
  getAllTipsTools(): Observable<any> {
    return this._httpClient.get(`${this._apiAllTipsTools}`);
  }

  // Endpoint: http://localhost/wp-json/wp/v2/tips-tools/{id}
  getSpecificTipsTool(id): Observable<any> {
    return this._httpClient.get(`${this._apiSpecificTipTool}/${id}`);
  }

  // Endpoint: http://localhost/wp-json/wp/v2/tips-tools
  addTipsTool(title, content): Observable<any> {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "POST"
      })
    };
    this.object = {
      title: title,
      content: content,
      status: "publish"
    };
    return this._httpClient.post(
      `${this._apiAddTipsTool}`,
      this.object,
      httpOptions
    );
  }

  // Endpoint: http://localhost/wp-json/wp/v2/tips-tools?author={id}
  filterByAuthor(id): Observable<any> {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "POST"
      })
    };
    return this._httpClient.get(
      `${this._apiFilterTipsTools}${id}`,
      httpOptions
    );
  }
}
