import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./shared/material.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./view/navbar/navbar";
import { PreguntaComponent } from "./view/pregunta/pregunta";

import { OpcionSimpleItemComponent } from "./view/opcion/item/opcionSimpleItem";
import { OpcionDesplegableItemComponent } from "./view/opcion/item/opcionDesplegableItem";
import { OpcionSimpleListComponent } from "./view/opcion/list/opcionSimpleList";
import { OpcionCruzadaListComponent } from "./view/opcion/list/opcionCruzadaList";

import { QuizComponent } from "./view/quiz/quiz";
import { MainComponent } from "./view/main/main";
import { FormQuizComponent } from "./view/formQuiz/formQuiz";

import { SanitizeHTML } from "./shared/sanitizeHTML.pipe";
import { CodeFormatter } from "./shared/codeFormatter.pipe";
import { viewPolymorphismDirective } from "./shared/viewPolymorphism.directive";

@NgModule({
  declarations: [
    SanitizeHTML,
    CodeFormatter,
    viewPolymorphismDirective,
    AppComponent,
    NavbarComponent,
    PreguntaComponent,
    OpcionSimpleItemComponent,
    OpcionDesplegableItemComponent,
    OpcionSimpleListComponent,
    OpcionCruzadaListComponent,
    QuizComponent,
    MainComponent,
    FormQuizComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [OpcionSimpleListComponent, OpcionCruzadaListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
