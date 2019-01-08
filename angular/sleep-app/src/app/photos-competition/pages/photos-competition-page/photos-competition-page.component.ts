import { Component, OnInit } from '@angular/core';
import { TipsToolsService } from '../../../core/services/tips-tools.service';
import { PhotosCompetitionService } from '../../../core/services/photos-competition.service';

@Component({
  selector: 'app-photos-competition-page',
  templateUrl: './photos-competition-page.component.html',
  styleUrls: ['./photos-competition-page.component.scss']
})
export class PhotosCompetitionPageComponent implements OnInit {
  icon;
  photos_competition1;
  photos_competition;


  constructor(private photosCompetitionService: PhotosCompetitionService) { }

  ngOnInit() {
    this.getAllPhotos();
  }

  getAllPhotos() {
    this.photosCompetitionService.getAllPhotosCompetition().subscribe(data => {
      this.photos_competition = data;
      console.log(this.photos_competition);
      console.log(this.photos_competition[0].title);
      this.photos_competition1 = this.photos_competition;
    },
      err => {
        console.log(err);
      });

  }

  addLike() {
    this.icon = document.querySelector('.icon-heart');
    console.log(this.icon);
    this.icon.classList.remove('ion-ios-heart-outline');
    this.icon.classList.add('ion-ios-heart');
  }

  removeLike() {
    this.icon = document.querySelector('.icon-heart');
    this.icon.classList.remove('ion-ios-heart');
    this.icon.classList.add('ion-ios-heart-outline');
  }

}
