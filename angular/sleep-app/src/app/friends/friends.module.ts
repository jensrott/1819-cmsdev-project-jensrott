import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [FriendsPageComponent],
  exports: [FriendsPageComponent],
})
export class FriendsModule { }
