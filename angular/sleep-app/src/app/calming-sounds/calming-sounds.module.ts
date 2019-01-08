import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { ShowCalmingSoundsPageComponent } from './pages/show-calming-sounds-page/show-calming-sounds-page.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ShowCalmingSoundsPageComponent],
  exports: [ShowCalmingSoundsPageComponent]
})
export class CalmingSoundsModule { }
