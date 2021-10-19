import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Categoria } from "./categoria.model";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  
  urlEndpoint: String = environment.urlEndPoint;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Categoria[]> {
    const url = `${this.urlEndpoint}/categorias`;
    return this.http.get<Categoria[]>(url);
  }

  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this.urlEndpoint}/categorias`;
    return this.http.post<Categoria>(url, categoria);
  }

  mensagem(mensagem: String): void {
    this._snack.open(`${mensagem}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3500,
    });
  }
}