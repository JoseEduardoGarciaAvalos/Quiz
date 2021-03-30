import { Component, OnInit } from "@angular/core";
import { QuizService } from "src/app/service/quiz.service";
import { Opcion, OpcionClass } from "src/app/model/Opcion";
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

  public opcionesClass: OpcionClass[] = [];
  public opciones: any = [];

  constructor(private quizS: QuizService) {}

  ngOnInit(): void {
    this.quizS.getPreguntas().subscribe((data) => {
      this.preguntas = data.preguntas;
      this.pregunta = this.preguntas[0].texto;
    });
    this.cargarOpciones();
  }

  siguientePregunta() {
    // this.pregunta = "";
    if (++this.numPregunta > this.preguntas.length) return;
    this.opciones = [];
    this.pregunta = this.preguntas[this.numPregunta - 1].texto;
    this.cargarOpciones();
  }

  cargarOpciones() {
    this.quizS.getOpciones(this.numPregunta).subscribe((data) => {
      this.opciones = data.opciones;
      this.opcionesClass = [];
      this.opciones.forEach(() => {
        this.opcionesClass.push(new OpcionClass());
      });
      console.log(this.opcionesClass);

      //
    });
  }
}
