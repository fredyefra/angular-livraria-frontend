import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Output, EventEmitter } from "@angular/core";
import { CategoriaService } from "../categoria.service";
import { Categoria } from "../categoria.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-categoria-update",
  templateUrl: "./categoria-update.component.html",
  styleUrls: ["./categoria-update.component.css"],
})
export class CategoriaUpdateComponent implements OnInit {
  categoria: Categoria = {
    identificador: "",
    nome: "",
    descricao: "",
  };

  constructor(
    private service: CategoriaService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private rota: Router
  ) {}

  ngOnInit(): void {
    this.categoria.identificador = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service
      .findById(this.categoria.identificador!)
      .subscribe((resposta) => {
        this.categoria.nome = resposta.nome;
        this.categoria.descricao = resposta.descricao;
      });
  }

  update(): void {
    this.service.update(this.categoria).subscribe(
      (formulario) => {
        this.service.mensagem("Categoria atualizada com sucesso!");
        this.rota.navigate(["categorias"]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cancel(): void {
    this.rota.navigate(["categorias"]);
  }
}