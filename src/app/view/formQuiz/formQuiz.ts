import { Component, OnInit } from "@angular/core";
import { Pregunta } from "../../model/Pregunta";
import { Opcion } from "../../model/Opcion";

@Component({
  selector: "app-formQuiz",
  templateUrl: "./formQuiz.html",
  styleUrls: ["./formQuiz.css"]
})
export class FormQuizComponent implements OnInit {
  public model: Pregunta = new Pregunta();

  constructor() {
    this.model.code;
  }

  ngOnInit(): void {}

  public addOptionModel(): void {
    this.model.opciones.get().push(new Opcion());
    this.model.opciones.get()[0].respuesta;
  }
}
