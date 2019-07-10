import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';

import { AppRoutingModule } from '../app-routing.module';
import { FriendsDetailPageComponent } from './pages/friends-detail-page/friends-detail-page.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [FriendsPageComponent, FriendsDetailPageComponent],
  exports: [FriendsPageComponent],
})
export class FriendsModule { }
