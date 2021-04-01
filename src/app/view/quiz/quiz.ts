import { Component, OnInit } from "@angular/core";
import { QuizService } from "src/app/service/quiz.service";
import { Opcion, OpcionClass, OpcionList } from "src/app/model/Opcion";
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

  public opciones: OpcionList = new OpcionList();
  public numRespuestas: number = 0;
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
    this.opciones = new OpcionList();
    this.pregunta = this.preguntas[this.numPregunta - 1].texto;
    this.cargarOpciones();
  }

  seleccionarOpcion(opcion: Opcion) {
    if (this.comprobado) return;

    if (this.numRespuestas === 1) this.opciones.resetSelected();
    opcion.clases.selected = !opcion.clases.selected;
  }

  cargarOpciones() {
    this.quizS.getOpciones(this.numPregunta).subscribe((data) => {
      this.opciones = new OpcionList(data.opciones);
      this.numRespuestas = this.opciones.getNumRespuestas();
      this.comprobado = false;
    });
  }

  comprobarPregunta() {
    if (this.comprobado) return;

    this.opciones.comprobarOpciones();
    this.comprobado = true;
  }
}
