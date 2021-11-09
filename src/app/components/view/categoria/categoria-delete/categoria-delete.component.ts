import { Component, OnInit } from "@angular/core";
import { CategoriaService } from "../categoria.service";
import { Categoria } from "../categoria.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-categoria-delete",
  templateUrl: "./categoria-delete.component.html",
  styleUrls: ["./categoria-delete.component.css"],
})
export class CategoriaDeleteComponent implements OnInit {
  categoria: Categoria = {
    identificador: "",
    nome: "",
    descricao: "",
  };

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute, private rota: Router,
  ) {}

  ngOnInit(): void {
    // carrega o id pela presente na barra de navegacao
    this.categoria.identificador = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service
      .findById(this.categoria.identificador!).subscribe((formulario) => {
        //this.categoria.identificador = resposta.identificador;
        this.categoria.nome = formulario.nome;
        this.categoria.descricao = formulario.descricao;
      })
  }

  delete(): void{
    this.service.delete(this.categoria.identificador!).subscribe((formulario) => {
    this.service.mensagem('Categoria deletada com sucesso!') 
    this.rota.navigate(['categorias'])

    }, err => {
    this.service.mensagem(err.error.message) 
  })
 }

 cancel(): void{
   this.rota.navigate(['categorias'])
 }

}