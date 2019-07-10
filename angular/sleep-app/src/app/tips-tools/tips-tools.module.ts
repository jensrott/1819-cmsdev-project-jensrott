import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { TipsToolsPageComponent } from './pages/tips-tools-page/tips-tools-page.component';
import { CreateTipsToolsPageComponent } from './pages/create-tips-tools-page/create-tips-tools-page.component';
import { TipsToolsDetailPageComponent } from './pages/tips-tools-detail-page/tips-tools-detail-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [TipsToolsPageComponent, CreateTipsToolsPageComponent, TipsToolsDetailPageComponent],
  exports: [TipsToolsPageComponent],
})
export class TipsToolsModule { }
