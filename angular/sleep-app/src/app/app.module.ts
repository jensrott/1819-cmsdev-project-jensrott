import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Custom */
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { QuizModule } from './quiz/quiz.module';
import { ProfileModule } from './profile/pages/profile.module';
import { MaterialModule } from './material/material.module';
import { SleepGoalsModule } from './sleep-goals/sleep-goals.module';
import { TipsToolsModule } from './tips-tools/tips-tools.module';
import { PhotosCompetitionModule } from './photos-competition/photos-competition.module';
import { FriendsModule } from './friends/friends.module';
import { CalmingSoundsModule } from './calming-sounds/calming-sounds.module';

import { AuthGuard } from './core/guards/auth.guard';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialModule,
    AppRoutingModule,
    HomeModule,
    QuizModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    ProfileModule,
    SleepGoalsModule,
    TipsToolsModule,
    PhotosCompetitionModule,
    FriendsModule,
    CalmingSoundsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
