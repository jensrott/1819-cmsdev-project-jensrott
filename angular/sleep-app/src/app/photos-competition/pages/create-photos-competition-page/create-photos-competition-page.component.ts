import { Component, OnInit } from '@angular/core';
import { Photo } from '../../../core/models/Photo';
import { PhotosCompetitionService } from '../../../core/services/photos-competition.service';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-create-photos-competition-page',
  templateUrl: './create-photos-competition-page.component.html',
  styleUrls: ['./create-photos-competition-page.component.scss']
})
export class CreatePhotosCompetitionPageComponent implements OnInit {

  photo: any;
  URL_photo: any;
  photo_competition_id: any;
  private response: any;
  private response1: any;
  private acf_fields: any;

  photo_competition: Photo = { id: '', title: '', content: '', photo_url: '' };

  constructor(private photoscompetitionService: PhotosCompetitionService, private router: Router) { }

  ngOnInit() {
  }

  onFileChange(event) {
    this.photo = event.target.files;
    console.log(event);
  }

  // Upload the image to the media library in WordPress
  createPhotosCompetition() {
    console.log(this.photo);
    // Upload the image to the media library in wordPress
    this.photoscompetitionService.createPhoto(this.photo).subscribe(data => {
      this.response = data;
      this.URL_photo = this.response.guid.rendered;
      console.log(data);
      console.log(this.URL_photo);
      // create new Photo-Competition in PostType
      this.photoscompetitionService.createPhotosCompetitionPostType(this.photo_competition.title,
        this.photo_competition.content).subscribe(data1 => {
          this.response1 = data1;
          console.log(data1);
          this.photo_competition_id = this.response1.id;
          this.photoscompetitionService.createSleepGoalAcf(this.photo_competition_id, this.URL_photo).subscribe(data2 => {
            this.acf_fields = data2;
            console.log(this.acf_fields);
            this.router.navigate(['/photos-competition']);
          });
        });
    });
  }

}
