import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Headers } from '@angular/http';

@Injectable()
export class PhotosCompetitionService {

  private _apiCreateMedia = environment.wpAPI.url + environment.wpAPI.endPoints.media;
  private _apiAllPhotosCompetition = environment.wpAPI.url + environment.wpAPI.endPoints.photos_competition;
  private _apiSpecificPhotosCompetition = environment.wpAPI.url + environment.wpAPI.endPoints.photos_competition;
  private _apiAddPhotosCompetition = environment.wpAPI.url + environment.wpAPI.endPoints.photos_competition;
  private _apiAddAcFPhotos = environment.wpAPI.url + environment.wpAPI.endPoints.acfPhotos_competition;

  private object: any;
  constructor(private _httpClient: HttpClient) { }
  // Uploading the file to the wordpress media library
  // Endpoint: http://localhost/wp-json/wp/v2/media
  createPhoto(photo): Observable<any> {
    const formData = new FormData();
    formData.append(photo[0].name, photo[0]);
    console.log(photo);
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'image',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Authorization': `Bearer ${token}`,
        'Content-Disposition': `attachment; filename = ${photo[0].name}`,
      })
    };
    // this.object = {
    //   title: title,
    //   content: content,
    // };
    return this._httpClient.post(`${this._apiCreateMedia}`, photo[0], httpOptions);
  }

  // Endpoint: http://localhost/wp-json/wp/v2/photos-competition
  // Retrieve all Photos from the Custom Post Type endpoint
  // using ?_embed allows to get hold of author meta data
  // using acf allows to get hold of image
  getAllPhotosCompetition(): Observable<any> {
    return this._httpClient.get(`${this._apiAllPhotosCompetition}?_embed`);
  }

  // Endpoint: http://localhost/wp-json/wp/v2/photos-competition
  // Create a new PhotosCompetition for the current user
  // In a next step, image url will be added using acf fields
  createPhotosCompetitionPostType(title, content): Observable<any> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': 'POST'
      })
    };
    this.object = {
      title: title,
      content: content,
      status: 'publish' // Otherwise it still needs to be accepted it is in draft
    };
    return this._httpClient.post(`${this._apiAddPhotosCompetition}`, this.object, httpOptions);
  }

  // Endpoint: http://localhost/wp-json/acf/v3/photos-competition/{post_id}
  // Big typo from copy paste needs to be createPhotosCompetitionAcf
  createSleepGoalAcf(post_id, URL_photo): Observable<any> { /* We need to add the post_id and photo_url we get from adding the photo to the media library */
    // Adds the image_photo ACF field to the photos-competition post type (URL to the image)
    console.log(this._apiAddAcFPhotos = environment.wpAPI.url + environment.wpAPI.endPoints.acfPhotos_competition);
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      })
    };

    this.object = {
      fields: { // Json string fields need to be put around this.
        image_photo: URL_photo
      }
    };
    return this._httpClient.post(`${this._apiAddAcFPhotos}/${post_id}`, this.object, httpOptions);
  }

}
