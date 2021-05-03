import { Component, OnInit } from "@angular/core";
import { Pregunta } from "../../model/Pregunta";
import { Opcion } from "../../model/Opcion";
import { QuizService } from "../../service/quiz.service";

@Component({
  selector: "app-formQuiz",
  templateUrl: "./formQuiz.html",
  styleUrls: ["./formQuiz.css"]
})
export class FormQuizComponent implements OnInit {
  public model: Pregunta = new Pregunta();

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {}

  public addOptionModel(): void {
    this.model.opciones.get().push(new Opcion());
  }

  public sendQuiz(): void {
    this.quizService.createQuestion(this.model).subscribe((data) => {
      console.log(data);
    });
    this.quizService
      .createOptions(this.model.opciones.get())
      .subscribe((data) => {
        console.log(data);
      });
  }
}
