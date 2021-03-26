import { Component, OnInit } from "@angular/core";
import { QuizService } from "src/app/service/quiz.service";
import { Pregunta } from "src/app/model/Pregunta";

@Component({
  selector: "app-pregunta",
  templateUrl: "./pregunta.html",
  styleUrls: ["./pregunta.css"]
})
export class PreguntaComponent implements OnInit {
  public pregunta: Pregunta = new Pregunta();

  constructor(private quizS: QuizService) {}

  ngOnInit(): void {
    this.quizS.getPreguntas().subscribe((data) => {
      this.pregunta = data.preguntas[0];
    });
  }
}
