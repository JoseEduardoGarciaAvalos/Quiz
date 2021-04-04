import { Component, OnInit } from "@angular/core";
import { QuizService } from "src/app/service/quiz.service";
import { Opcion, OpcionClass, OpcionList } from "src/app/model/Opcion";
import { Pregunta, PreguntaList } from "src/app/model/Pregunta";
import { Router } from "@angular/router";

const BTN_TEXT1: string[] = ["Siguiente", "Finalizar"];

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
  public isFinalPregunta: boolean = false;

  public btnText1: string = BTN_TEXT1[0];

  constructor(private quizS: QuizService, public router: Router) {}

  ngOnInit(): void {
    this.quizS.getPreguntas().subscribe((data) => {
      this.preguntas = data.preguntas;
      this.pregunta = this.preguntas[0].texto;
      this.quizS.preguntas = new PreguntaList(this.preguntas);
      this.btnUpdateText();
    });
    this.cargarOpciones();
  }

  btnUpdateText() {
    this.isFinalPregunta = this.numPregunta === this.preguntas.length;
    this.btnText1 = this.isFinalPregunta ? BTN_TEXT1[1] : BTN_TEXT1[0];
  }

  siguientePregunta() {
    if (!this.comprobado) this.opciones.comprobarOpciones();
    this.quizS.preguntas.setOpciones(this.numPregunta - 1, this.opciones);

    if (this.isFinalPregunta) {
      this.router.navigate(["resultado"]);
      return;
    }

    this.opciones = new OpcionList();
    this.pregunta = this.preguntas[this.numPregunta].texto;
    this.numPregunta++;
    this.btnUpdateText();
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
