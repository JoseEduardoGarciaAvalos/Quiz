import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizComponent } from "./view/quiz/quiz";
import { MainComponent } from "./view/main/main";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "quiz/:code", component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
