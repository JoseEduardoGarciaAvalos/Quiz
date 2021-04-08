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
  public correctAnswers: number = 0;
  public totalQuestions: number = 0;

  constructor(private quizS: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.preguntas = this.quizS.preguntas;
    this.correctAnswers = this.preguntas.getNumberAnsweredCorrectly();
    this.totalQuestions = this.preguntas.getNumberQuestion();
  }

  public irMain() {
    this.router.navigate(["/"]);
  }
}
