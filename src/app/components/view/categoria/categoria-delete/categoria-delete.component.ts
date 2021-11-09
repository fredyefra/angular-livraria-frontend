import { Component, OnInit } from "@angular/core";
import { CategoriaService } from "../categoria.service";
import { Categoria } from "../categoria.model";
import { ActivatedRoute } from "@angular/router";

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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // carrega o id pela presente na barra de navegacao
    this.categoria.identificador = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service
      .findById(this.categoria.identificador!).subscribe((resposta) => {
        //this.categoria.identificador = resposta.identificador;
        this.categoria.nome = resposta.nome;
        this.categoria.descricao = resposta.descricao;
        //console.log(this.categoria);
      });
  }
}
