import { Type } from "@angular/core";
import { OpcionList, OpcionUnicaList, OpcionMultipleList } from "./Opcion";
import { OpcionListComponent } from "../view/opcion/opcionUI";
import { OpcionSimpleListComponent } from "../view/opcion/list/opcionSimpleList";
import { OpcionCruzadaListComponent } from "../view/opcion/list/opcionCruzadaList";

export class FactoryMethod {
  private static nameOpcionList: Type<OpcionList>[] = [
    OpcionUnicaList,
    OpcionMultipleList
  ];
  private static nameOpcionListComponet: Type<OpcionListComponent>[] = [
    OpcionSimpleListComponent,
    OpcionSimpleListComponent,
    OpcionCruzadaListComponent
  ];

  public static createOpcionList(index: number, data: any = []): OpcionList {
    return new FactoryMethod.nameOpcionList[index](data);
  }

  public static getOpcionListComponent(
    index: number
  ): Type<OpcionListComponent> {
    return FactoryMethod.nameOpcionListComponet[index];
  }
}
