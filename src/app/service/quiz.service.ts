import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pregunta } from "src/app/model/Pregunta";
import { Opcion } from "src/app/model/Opcion";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  constructor(private http: HttpClient) {}

  /**
   * getPreguntas
   */
  public getPreguntas(): Observable<Pregunta[]> {
    let url = environment.urlBaseQuizAPI + "api/pregunta";

    return this.http.get<Pregunta[]>(url);
  }

  /**
   * getOpciones
   */
  public getOpciones(codePregunta: number): Observable<Opcion[]> {
    let url = environment.urlBaseQuizAPI + "api/opcion/" + codePregunta;

    return this.http.get<Opcion[]>(url);
  }
}
