import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { AuthenticationService } from './services/authentication.service';
import { TipsToolsService } from './services/tips-tools.service';
import { PhotosCompetitionService } from './services/photos-competition.service';
import { SleepGoalsService } from './services/sleep-goals.service';
import { ProvideSleepResultsService } from './services/provide-sleep-results.service';
import { FriendsService } from './services/friends.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [HeaderComponent, FooterComponent, NotFoundPageComponent, LoginComponent, RegisterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
  providers: [
    AuthenticationService,
    TipsToolsService,
    PhotosCompetitionService,
    SleepGoalsService,
    ProvideSleepResultsService,
    FriendsService
  ]
})
export class CoreModule { }
