import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dialog } from '@material-ui/core';
import { Rotate90DegreesCcw } from '@material-ui/icons';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  
  categorias: Categoria[] = []; 
  
  categoria:   Categoria = {
    identificador: "",
    nome: "",
    descricao: "",
  };

  displayedColumns: string[] = ['identificador', 'nome', 'descricao',  'livros', 'acoes'];

  constructor(private service:CategoriaService, private rota:Router, public dialog: MatDialog) {}

  ngOnInit(): void {
  this.findAll();
  }

  private findAll(){
    this.service.findAll().subscribe(resposta=>{
      console.log(resposta);
      this.categorias = resposta;
    })
  }

  novaCategoria(): void{
    this.rota.navigate(["categorias/create"]);
  }

  
  /* openDialog(identificador: string): void{
    
    const dialogRef = this.dialog.open(CategoriaUpdateComponent);

    dialogRef.afterOpened().subscribe(result => {
      this.service
      .findById(identificador).subscribe((formulario) => {
        //this.categoria.identificador = resposta.identificador;
        this.categoria.nome = formulario.nome;
        this.categoria.descricao = formulario.descricao;
        console.log(this.categoria.descricao)
      })

    });
  } */

  
  
  /* update(): void {
    this.service.update(this.categoria.identificador!).subscribe(result => {
      //this.service.delete(this.categoria.identificador!).subscribe((formulario) => {
        this.service.mensagem('Categoria alterada com sucesso!') 
        //this.rota.navigate(['categorias'])
    
    }) 
  }*/


}
