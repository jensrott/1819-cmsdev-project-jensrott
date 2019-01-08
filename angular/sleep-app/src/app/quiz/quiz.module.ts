import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app/app-routing.module';

import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { TypeSleeperPageComponent } from './pages/type-sleeper-page/type-sleeper-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [QuizPageComponent, TypeSleeperPageComponent]
})
export class QuizModule { }
