import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Output, EventEmitter } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/dataservice/data-service.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

   categoria:  Categoria = {
   identificador: "",
   nome: "",
   descricao: "",
  };

  constructor(private service: CategoriaService, public dialog: MatDialog, private route: ActivatedRoute, 
    private rota: Router) { }

  ngOnInit(): void {
    this.categoria.identificador = this.route.snapshot.paramMap.get("id")!;
    this.findById()   
  }

  findById(): void {
    this.service
      .findById(this.categoria.identificador!).subscribe((formulario) => {
        this.categoria.nome = formulario.nome;
        this.categoria.descricao = formulario.descricao;
      })
  }

  update(): void{
    this.service.update(this.categoria.identificador!).subscribe((formulario) => {
    this.service.mensagem('Categoria editada com sucesso!') 
    this.rota.navigate(['categorias'])
  })
 }

 cancel(): void{
   this.rota.navigate(['categorias'])
 }

}
