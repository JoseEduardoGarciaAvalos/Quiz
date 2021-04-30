import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizComponent } from "./view/quiz/quiz";
import { MainComponent } from "./view/main/main";
import { FormQuizComponent } from "./view/formQuiz/formQuiz";

const routes: Routes = [
  { path: "", component: FormQuizComponent },
  { path: "", component: MainComponent },
  { path: "quiz/:code", component: QuizComponent },
  { path: "quiz/form", component: FormQuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
