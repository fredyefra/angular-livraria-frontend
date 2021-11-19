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

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAllByCategoria(categoria_id:string): Observable<Livro[]> { 
    const url = `${this.urlEndpoint}/livros?categoria=${categoria_id}`;
    return this.http.get<Livro[]>(url);
  } 

}