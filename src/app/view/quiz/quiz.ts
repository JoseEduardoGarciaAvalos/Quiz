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

  public opciones: any = [];
  public canRespuestas: number = 0;
  public comprobado: boolean = false;

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

  seleccionarOpcion(opcion: Opcion) {
    if (this.comprobado) return;

    if (this.canRespuestas === 1)
      this.opciones.map((opcion: Opcion) => (opcion.clases.selected = false));
    opcion.clases.selected = !opcion.clases.selected;
  }

  cargarOpciones() {
    this.quizS.getOpciones(this.numPregunta).subscribe((data) => {
      this.opciones = data.opciones;
      this.canRespuestas = 0;
      this.comprobado = false;

      this.opciones.forEach((opcion: Opcion) => {
        opcion.clases = new OpcionClass();
        if (opcion.respuesta === 1) {
          this.canRespuestas++;
        }
      });
    });
  }

  comprobarPregunta() {
    if (this.comprobado) return;

    this.opciones.map((opcion: Opcion) => {
      if (opcion.clases.selected) {
        opcion.clases.correct = opcion.respuesta === 1;
        opcion.clases.error = opcion.respuesta !== 1;
      } else opcion.clases.forget = opcion.respuesta === 1;

      this.comprobado = true;
      return opcion;
    });
  }
}
