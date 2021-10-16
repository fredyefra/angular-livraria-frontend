import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlEndpoint: String = environment.urlEndPoint;
  
  constructor(private http:HttpClient) { }

  findAll():Observable<Categoria[]>{
    const url = `${this.urlEndpoint}/categorias`;
    return this.http.get<Categoria[]>(url);
  }

}
