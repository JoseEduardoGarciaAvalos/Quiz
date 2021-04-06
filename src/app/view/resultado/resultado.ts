import { Component, OnInit } from "@angular/core";
import { QuizService } from "src/app/service/quiz.service";
import { PreguntaList } from "src/app/model/Pregunta";
import { Router } from "@angular/router";

@Component({
  selector: "app-resultado",
  templateUrl: "./resultado.html",
  styleUrls: ["./resultado.css"]
})
export class ResultadoComponent implements OnInit {
  public preguntas: PreguntaList = new PreguntaList();

  constructor(private quizS: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.preguntas = this.quizS.preguntas;
  }

  public irMain() {
    this.router.navigate(["/"]);
  }
}
