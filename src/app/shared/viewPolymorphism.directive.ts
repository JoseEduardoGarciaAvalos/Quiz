import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[viewPolymorphism]"
})
export class viewPolymorphismDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
