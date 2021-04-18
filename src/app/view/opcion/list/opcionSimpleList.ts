import { Component, Input, OnInit } from "@angular/core";
import { OpcionListComponent } from "../opcionUI";
import { Opcion, OpcionList, OpcionUnicaList } from "src/app/model/Opcion";

@Component({
  templateUrl: "opcionSimpleList.html"
})
export class OpcionSimpleListComponent implements OpcionListComponent, OnInit {
  @Input() opciones: OpcionList = new OpcionUnicaList();
  @Input() isViewFeedback: boolean = false;

  ngOnInit(): void {
    console.log("opcionSimpleListComponent", this.opciones);
  }

  seleccionarOpcion(opcion: Opcion) {
    if (this.isViewFeedback) return;

    this.opciones.changeUserResponse(opcion);
  }
}
