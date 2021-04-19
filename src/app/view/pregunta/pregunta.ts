import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ComponentFactoryResolver,
  ComponentRef
} from "@angular/core";
import { StateAPPService } from "../../service/stateApp.service";
import { OpcionList } from "src/app/model/Opcion";
import { OpcionListComponent } from "../opcion/opcionUI";
import { viewPolymorphismDirective } from "../../shared/viewPolymorphism.directive";
import { FactoryMethod } from "../../model/FactoryMethod";
import { Pregunta, PreguntaList } from "src/app/model/Pregunta";
import { Subscription } from "rxjs";

@Component({
  selector: "app-pregunta",
  templateUrl: "./pregunta.html",
  styleUrls: ["./pregunta.css"]
})
export class PreguntaComponent implements OnInit, OnDestroy {
  @Input() pregunta: Pregunta = new Pregunta();
  @Input() isChecked: boolean = false;

  @ViewChild(viewPolymorphismDirective, { static: true })
  viewChild: viewPolymorphismDirective;
  private opcionListComp: ComponentRef<OpcionListComponent>;
  private subcription1: Subscription;

  constructor(
    private stateS: StateAPPService,
    private componentFactory: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    console.log("EN PREGUNTA", this.pregunta);

    this.subcription1 = this.stateS.loadOptions$.subscribe(() => {
      console.log("CARGADO", this.pregunta);
      this.loadOptionListComponent();
    });
  }

  ngOnDestroy(): void {
    this.subcription1.unsubscribe();
  }

  ngOnChanges(): void {
    if (this.isChecked) {
      this.opcionListComp.instance.isViewFeedback = this.isChecked;
    }
  }

  loadOptionListComponent() {
    const viewChildRef = this.viewChild.viewContainerRef;
    viewChildRef.clear();
    this.opcionListComp = viewChildRef.createComponent<OpcionListComponent>(
      this.componentFactory.resolveComponentFactory(
        FactoryMethod.getOpcionListComponent(this.pregunta.tipo)
      )
    );
    this.opcionListComp.instance.opciones = this.pregunta.opciones;
    this.opcionListComp.instance.isViewFeedback = this.isChecked;
  }
}
