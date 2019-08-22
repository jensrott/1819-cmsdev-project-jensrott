import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../../app/app-routing.module";
import { MaterialModule } from "../material/material.module";

import { QuizPageComponent } from "./pages/quiz-page/quiz-page.component";
import { TypeSleeperPageComponent } from "./pages/type-sleeper-page/type-sleeper-page.component";
import { QuizAnswersComponent } from "./components/quiz-answers/quiz-answers.component";
import { QuizEmptyAnswersComponent } from "./components/quiz-empty-answers/quiz-empty-answers.component";

@NgModule({
  imports: [CommonModule, FormsModule, AppRoutingModule, MaterialModule],
  declarations: [
    QuizPageComponent,
    TypeSleeperPageComponent,
    QuizAnswersComponent,
    QuizEmptyAnswersComponent
  ],
  entryComponents: [QuizAnswersComponent, QuizEmptyAnswersComponent],
  exports: [QuizAnswersComponent, QuizEmptyAnswersComponent]
})
export class QuizModule {}
