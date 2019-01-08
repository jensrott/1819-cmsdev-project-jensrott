import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateSleepGoalsPageComponent } from './pages/create-sleep-goals-page/create-sleep-goals-page.component';
import { AppRoutingModule } from '../../app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [CreateSleepGoalsPageComponent],
  exports: [CreateSleepGoalsPageComponent],
})
export class SleepGoalsModule { }
