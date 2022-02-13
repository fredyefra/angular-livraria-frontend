import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  urlEndpoint: String = environment.urlEndPoint;

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  findAllByCategoria(id_cat:string): Observable<Livro[]> { 
    const url = `${this.urlEndpoint}/livros?categoria=${id_cat}`;
    return this.http.get<Livro[]>(url);
  } 

  findById(id: String): Observable<Livro> {
    const url = `${this.urlEndpoint}/livros/${id}`;
    return this.http.get<Livro>(url);
  }

  create(livro: Livro, id_cat:string) : Observable<Livro> {
    const url = `${this.urlEndpoint}/livros?categoria=${id_cat}`;
    return this.http.post<Livro>(url, livro);
  }
 
  update(livro:Livro): Observable<Livro>{
    const url = `${this.urlEndpoint}/livros/${livro.identificador}`;
    return this.http.put<Livro>(url,livro);
   }

  delete(id: String):Observable<void>{
    const url = `${this.urlEndpoint}/livros/${id}`;
    return this.http.delete<void>(url)
  }


  mensagem(mensagem: String): void {
    this.snack.open(`${mensagem}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 5000,
    });
  }
}