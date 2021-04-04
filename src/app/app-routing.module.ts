import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultadoComponent } from "./view/resultado/resultado";
import { QuizComponent } from "./view/quiz/quiz";

const routes: Routes = [
  { path: "", component: QuizComponent },
  { path: "resultado", component: ResultadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
