import { Component, Input, OnInit } from "@angular/core";
import { OpcionListComponent } from "../opcionUI";
import { OpcionList, OpcionUnicaList } from "src/app/model/Opcion";

@Component({
  templateUrl: "opcionCruzadaList.html"
})
export class OpcionCruzadaListComponent implements OpcionListComponent, OnInit {
  @Input() opciones: OpcionList = new OpcionUnicaList();

  ngOnInit(): void {
    console.log("opcionCruzadaListComponent", this.opciones);
  }
}
