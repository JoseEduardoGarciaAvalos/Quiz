import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./shared/material.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./view/navbar/navbar";
import { PreguntaComponent } from "./view/pregunta/pregunta";
import { OpcionComponent } from "./view/opcion/opcion";
import { QuizComponent } from "./view/quiz/quiz";
import { ResultadoComponent } from "./view/resultado/resultado";
import { MainComponent } from "./view/main/main";

import { SanitizeHTML } from "./shared/sanitizeHTML.pipe";
import { CodeFormatter } from "./shared/codeFormatter.pipe";

@NgModule({
  declarations: [
    SanitizeHTML,
    CodeFormatter,
    AppComponent,
    NavbarComponent,
    PreguntaComponent,
    OpcionComponent,
    QuizComponent,
    ResultadoComponent,
    MainComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
