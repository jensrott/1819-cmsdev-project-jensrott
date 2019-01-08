import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app/app-routing.module';

import { PhotosCompetitionPageComponent } from './pages/photos-competition-page/photos-competition-page.component';
import { CreatePhotosCompetitionPageComponent } from './pages/create-photos-competition-page/create-photos-competition-page.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [PhotosCompetitionPageComponent, CreatePhotosCompetitionPageComponent],
  exports: [PhotosCompetitionPageComponent],
})
export class PhotosCompetitionModule { }
