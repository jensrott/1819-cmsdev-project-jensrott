import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

import { AppRoutingModule } from "../app-routing.module";

import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

import { AuthenticationService } from "./services/authentication.service";
import { TipsToolsService } from "./services/tips-tools.service";
import { PhotosCompetitionService } from "./services/photos-competition.service";
import { SleepGoalsService } from "./services/sleep-goals.service";
import { ProvideSleepResultsService } from "./services/provide-sleep-results.service";
import { FriendsService } from "./services/friends.service";
import { MemesService } from "./services/memes.service";
import { VideosService } from "./services/videos.service";
import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
  imports: [CommonModule, AppRoutingModule, FormsModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    LoaderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent
  ],
  providers: [
    AuthenticationService,
    TipsToolsService,
    PhotosCompetitionService,
    SleepGoalsService,
    ProvideSleepResultsService,
    FriendsService,
    MemesService,
    VideosService
  ]
})
export class CoreModule {}
