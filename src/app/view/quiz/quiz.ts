import { Component, OnInit } from "@angular/core";
import { QuizService } from "src/app/service/quiz.service";
import { Opcion } from "src/app/model/Opcion";
import { Pregunta } from "src/app/model/Pregunta";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.html",
  styleUrls: ["./quiz.css"]
})
export class QuizComponent implements OnInit {
  public numPregunta: number = 1;
  public preguntas: Pregunta[] = [];
  public pregunta: string = "";

  opciones: any = [
    // {
    //   error: true,
    //   texto:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis velit illumatque itaque possimus facere numquam blanditiis officia odio, harum non eligendi amet voluptas nulla ipsa, repellendus, dicta sed omnis!"
    // },
    // {
    //   selected: true,
    //   texto:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis velit illumatque itaque possimus facere numquam blanditiis officia odio, harum non eligendi amet voluptas nulla ipsa, repellendus, dicta sed omnis!"
    // },
    // {
    //   correct: true,
    //   texto:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis velit illumatque itaque possimus facere numquam blanditiis officia odio, harum non eligendi amet voluptas nulla ipsa, repellendus, dicta sed omnis!"
    // },
    // {
    //   texto:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis velit illumatque itaque possimus facere numquam blanditiis officia odio, harum non eligendi amet voluptas nulla ipsa, repellendus, dicta sed omnis!"
    // }
  ];

  constructor(private quizS: QuizService) {}

  ngOnInit(): void {
    this.quizS.getPreguntas().subscribe((data) => {
      this.preguntas = data.preguntas;
      this.pregunta = this.preguntas[0].texto;
    });
    this.quizS.getOpciones(this.numPregunta).subscribe((data) => {
      this.opciones = data.opciones;
    });
  }

  siguientePregunta() {
    // this.pregunta = "";
    if (++this.numPregunta > this.preguntas.length) return;
    this.opciones = [];
    this.pregunta = this.preguntas[this.numPregunta - 1].texto;
    this.quizS.getOpciones(this.numPregunta).subscribe((data) => {
      this.opciones = data.opciones;
    });
  }
}
