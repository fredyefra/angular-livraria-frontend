import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias: Categoria[] = []; 

  displayedColumns: string[] = ['identificador', 'nome', 'descricao',  'livros', 'acoes'];

  constructor(private service:CategoriaService) { }

  ngOnInit(): void {
  this.findAll();
  }

  private findAll(){
    this.service.findAll().subscribe(resposta=>{
      console.log(resposta);
      this.categorias = resposta;
    })
  }

}
