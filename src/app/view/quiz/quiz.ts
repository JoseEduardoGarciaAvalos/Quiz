import { Component, EventEmitter, OnInit } from "@angular/core";
import { QuizService } from "src/app/service/quiz.service";
import { StateAPPService } from "../../service/stateApp.service";
import { Opcion, OpcionList } from "src/app/model/Opcion";
import { ActivatedRoute, Router } from "@angular/router";
import { Pregunta, PreguntaList } from "src/app/model/Pregunta";
import { FactoryMethod } from "../../model/FactoryMethod";
import { Subject } from "rxjs";

const BTN_TEXT: String[] = ["Siguiente", "Finalizar", "Salir"];

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.html",
  styleUrls: ["./quiz.css"]
})
export class QuizComponent implements OnInit {
  public isChecked: boolean = false;
  public preguntas: Subject<Pregunta[]> = new Subject();

  constructor(
    private quizS: QuizService,
    private stateS: StateAPPService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.stateS.resetQuiz();
  }

  ngOnInit(): void {
    let code = this.route.snapshot.paramMap.get("code");
    console.log(code);

    this.quizS.getPreguntas().subscribe((data) => {
      this.stateS.startQuiz(data);
      this.cargarOpciones();
    });
  }

  updateText(): String {
    if (this.stateS.isFineshedQuiz()) return BTN_TEXT[2];
    if (this.stateS.isFinalQuestion()) return BTN_TEXT[1];
    return BTN_TEXT[0];
  }

  siguientePregunta() {
    if (this.stateS.isFineshedQuiz()) {
      this.router.navigate(["/"]);
      return;
    }

    this.stateS.nextQuestion();
    if (!this.stateS.isFineshedQuiz()) this.cargarOpciones();
    else {
      this.isChecked = false;
      console.log("EVENTO ", this.stateS.getQuestionsList().get());

      this.preguntas.next(this.stateS.getQuestionsList().get());
      this.stateS.emitloadedOptions();
    }
  }

  seleccionarOpcion(opcion: Opcion) {
    if (this.isChecked) return;

    this.stateS.getOptionsOfQuestionCurrent().changeUserResponse(opcion);
  }

  cargarOpciones() {
    let codeProximaPregunta: number = this.stateS.getQuestionCurrent().code;
    this.quizS.getOpciones(codeProximaPregunta).subscribe((data) => {
      let opciones: OpcionList = FactoryMethod.createOpcionList(
        this.stateS.getTypeQuestionCurrent(),
        data
      );
      opciones.shuffleItems();
      this.stateS.putOptionsIntoQuestionCurrent(opciones);
      this.isChecked = false;

      console.log("RESPUESTA HTTP");

      this.preguntas.next([this.stateS.getQuestionCurrent()]);
      this.stateS.emitloadedOptions();
    });
  }

  comprobarPregunta() {
    this.isChecked = true;
  }
}
