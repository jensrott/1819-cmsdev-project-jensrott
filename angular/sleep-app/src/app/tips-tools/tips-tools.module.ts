import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";

import { CoreModule } from "../core/core.module";

import { TipsPageComponent } from "./pages/tips-page/tips-page.component";
import { CreateTipsToolsPageComponent } from "./pages/create-tips-tools-page/create-tips-tools-page.component";
import { TipsDetailPageComponent } from "./pages/tips-detail-page/tips-detail-page.component";
import { VideosPageComponent } from "./pages/videos-page/videos-page.component";
import { MemesPageComponent } from "./pages/memes-page/memes-page.component";
import { VideosDetailPageComponent } from "./pages/videos-detail-page/videos-detail-page.component";
import { MemesDetailPageComponent } from "./pages/memes-detail-page/memes-detail-page.component";
import { TipsEmptyAnswersComponent } from "./components/tips-empty-answers/tips-empty-answers.component";

@NgModule({
  imports: [CommonModule, FormsModule, AppRoutingModule, CoreModule],
  declarations: [
    TipsPageComponent,
    CreateTipsToolsPageComponent,
    TipsDetailPageComponent,
    VideosPageComponent,
    MemesPageComponent,
    VideosDetailPageComponent,
    MemesDetailPageComponent,
    TipsEmptyAnswersComponent
  ],
  entryComponents: [TipsEmptyAnswersComponent],
  exports: [
    TipsPageComponent,
    CreateTipsToolsPageComponent,
    TipsDetailPageComponent,
    TipsEmptyAnswersComponent
  ]
})
export class TipsToolsModule {}
