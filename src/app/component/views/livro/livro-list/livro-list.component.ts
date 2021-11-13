import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {
  
  /* livros: Livro[] = []; 
  
  livro:   Livro = {
    identificador: "",
    titulo: "",
    
  }; */

  displayedColumns: string[] = ['identificador', 'titulo', 'livros', 'acoes']; 

  constructor() { }

  ngOnInit(): void {
  }

}
