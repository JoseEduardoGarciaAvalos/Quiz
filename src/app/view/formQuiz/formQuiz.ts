import { Component, OnInit } from "@angular/core";
import { Pregunta, PreguntaList } from "../../model/Pregunta";
import { Opcion } from "../../model/Opcion";
import { QuizService } from "../../service/quiz.service";

@Component({
  selector: "app-formQuiz",
  templateUrl: "./formQuiz.html",
  styleUrls: ["./formQuiz.css"]
})
export class FormQuizComponent implements OnInit {
  public model: PreguntaList = new PreguntaList();

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {}

  public addQuestionModel(): void {
    this.model.get().push(new Pregunta());
  }
  public addOptionModel(index: number): void {
    this.model.get()[index].opciones.get().push(new Opcion());
  }

  public sendQuiz(): void {
    // this.quizService.createQuestion(this.model).subscribe((data) => {
    //   console.log(data);
    // });
    // this.quizService
    //   .createOptions(this.model.opciones.get())
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    this.test = this.model.getState();
  }
  public test = [];
}
