import {
  Component,
  OnInit,
  ViewChild,
  Type,
  ComponentFactoryResolver,
  ComponentRef
} from "@angular/core";
import { QuizService } from "src/app/service/quiz.service";
import {
  Opcion,
  OpcionList,
  OpcionUnicaList,
  OpcionMultipleList
} from "src/app/model/Opcion";
import { ActivatedRoute, Router } from "@angular/router";
import { Pregunta, PreguntaList } from "src/app/model/Pregunta";
import { viewPolymorphismDirective } from "../../shared/viewPolymorphism.directive";
import { OpcionListComponent } from "../opcion/opcionUI";
import { OpcionSimpleListComponent } from "../opcion/list/opcionSimpleList";
import { OpcionCruzadaListComponent } from "../opcion/list/opcionCruzadaList";

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

  public opciones: OpcionList = new OpcionUnicaList();
  public isChecked: boolean = false;
  public isFinalPregunta: boolean = false;

  public btnText1: string = BTN_TEXT1[0];

  @ViewChild(viewPolymorphismDirective, { static: true })
  viewChild: viewPolymorphismDirective;
  private opcionListComp: ComponentRef<OpcionListComponent>;

  constructor(
    private quizS: QuizService,
    public router: Router,
    public route: ActivatedRoute,
    private componentFactory: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    let code = this.route.snapshot.paramMap.get("code");
    console.log(code);

    this.quizS.getPreguntas().subscribe((data) => {
      this.preguntas = data;
      this.pregunta = this.preguntas[0].texto;

      this.quizS.preguntas = new PreguntaList(this.preguntas);
      this.btnUpdateText();
      this.cargarOpciones();
    });
  }

  btnUpdateText() {
    this.isFinalPregunta = this.numPregunta === this.preguntas.length;
    this.btnText1 = this.isFinalPregunta ? BTN_TEXT1[1] : BTN_TEXT1[0];
  }

  siguientePregunta() {
    this.quizS.preguntas.setOpciones(this.numPregunta - 1, this.opciones);

    if (this.isFinalPregunta) {
      this.router.navigate(["resultado"]);
      return;
    }

    this.opciones = new OpcionUnicaList();
    this.pregunta = this.preguntas[this.numPregunta].texto;
    this.numPregunta++;
    this.btnUpdateText();
    this.cargarOpciones();
  }

  seleccionarOpcion(opcion: Opcion) {
    if (this.isChecked) return;

    this.opciones.changeUserResponse(opcion);
  }

  cargarOpciones() {
    this.quizS.getOpciones(this.numPregunta).subscribe((data) => {
      this.opciones = this.factory(data);
      this.opciones.shuffleItems();
      this.isChecked = false;
      this.loadOptionListComponent();
    });
  }

  loadOptionListComponent() {
    const viewChildRef = this.viewChild.viewContainerRef;
    viewChildRef.clear();
    this.opcionListComp = viewChildRef.createComponent<OpcionListComponent>(
      this.componentFactory.resolveComponentFactory(this.factory2())
    );
    this.opcionListComp.instance.opciones = this.opciones;
    this.opcionListComp.instance.isViewFeedback = false;
  }

  comprobarPregunta() {
    this.isChecked = true;
    this.opcionListComp.instance.isViewFeedback = true;
  }

  factory(data) {
    if (this.preguntas[this.numPregunta - 1].tipo === 2)
      return new OpcionMultipleList(data);
    else return new OpcionUnicaList(data);
  }

  factory2() {
    let component: Type<any>;
    if (this.preguntas[this.numPregunta - 1].tipo === 2)
      component = OpcionSimpleListComponent;
    else component = OpcionSimpleListComponent;

    return component;
  }
}
