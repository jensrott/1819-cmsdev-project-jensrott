import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProvideSleepResultsComponent } from './components/provide-sleep-results/provide-sleep-results.component';
import { ShowSleepStatusComponent } from './components/show-sleep-status/show-sleep-status.component';
import { SleepGoalAchievedComponent } from './components/sleep-goal-achieved/sleep-goal-achieved.component';
import { ShowNoSleepGoalComponent } from './components/show-no-sleep-goal/show-no-sleep-goal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  declarations: [
    HomePageComponent,
    ProvideSleepResultsComponent,
    ShowSleepStatusComponent,
    SleepGoalAchievedComponent,
    ShowNoSleepGoalComponent
  ],
  entryComponents: [ProvideSleepResultsComponent, ShowSleepStatusComponent, SleepGoalAchievedComponent, ShowNoSleepGoalComponent ],
  exports: [HomePageComponent, ProvideSleepResultsComponent, ShowSleepStatusComponent, SleepGoalAchievedComponent],
})
export class HomeModule { }
