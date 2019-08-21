import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home/pages/home-page/home-page.component";
import { QuizPageComponent } from "./quiz/pages/quiz-page/quiz-page.component";
import { LoginComponent } from "./core/pages/login/login.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { RegisterComponent } from "./core/pages/register/register.component";
import { ProfileComponent } from "./profile/pages/profile-page/profile.component";
import { CreateSleepGoalsPageComponent } from "./sleep-goals/pages/create-sleep-goals-page/create-sleep-goals-page.component";
import { TipsPageComponent } from "./tips-tools/pages/tips-page/tips-page.component";
import { CreateTipsToolsPageComponent } from "./tips-tools/pages/create-tips-tools-page/create-tips-tools-page.component";
import { PhotosCompetitionPageComponent } from "./photos-competition/pages/photos-competition-page/photos-competition-page.component";
import { CreatePhotosCompetitionPageComponent } from "./photos-competition/pages/create-photos-competition-page/create-photos-competition-page.component";
import { FriendsPageComponent } from "./friends/pages/friends-page/friends-page.component";
import { ShowCalmingSoundsPageComponent } from "./calming-sounds/pages/show-calming-sounds-page/show-calming-sounds-page.component";
import { TypeSleeperPageComponent } from "./quiz/pages/type-sleeper-page/type-sleeper-page.component";
import { FriendsDetailPageComponent } from "./friends/pages/friends-detail-page/friends-detail-page.component";
import { TipsDetailPageComponent } from "./tips-tools/pages/tips-detail-page/tips-detail-page.component";
import { VideosPageComponent } from "./tips-tools/pages/videos-page/videos-page.component";
import { VideosDetailPageComponent } from "./tips-tools/pages/videos-detail-page/videos-detail-page.component";
import { MemesPageComponent } from "./tips-tools/pages/memes-page/memes-page.component";
import { MemesDetailPageComponent } from "./tips-tools/pages/memes-detail-page/memes-detail-page.component";
import { NotFoundPageComponent } from "./core/pages/not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  { path: "home", component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: "create-sleep-goals",
    component: CreateSleepGoalsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tips-tools/memes",
    component: MemesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tips-tools/memes/:id",
    component: MemesDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tips-tools/videos",
    component: VideosPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tips-tools/videos/:id",
    component: VideosDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tips-tools/tips",
    component: TipsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tips-tools/tips/:id",
    component: TipsDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "create-tips-tools",
    component: CreateTipsToolsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "create-photos-competition",
    component: CreatePhotosCompetitionPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "photos-competition",
    component: PhotosCompetitionPageComponent,
    canActivate: [AuthGuard]
  },
  { path: "quiz", component: QuizPageComponent, canActivate: [AuthGuard] },
  {
    path: "type-sleeper",
    component: TypeSleeperPageComponent,
    canActivate: [AuthGuard]
  },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: "friends",
    component: FriendsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "friends/:id",
    component: FriendsDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "calming-sounds",
    component: ShowCalmingSoundsPageComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "404", component: NotFoundPageComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
