import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

import { ProfileComponent } from './profile-page/profile.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
})
export class ProfileModule { }
