import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Categoria } from "../categoria.model";
import { CategoriaService } from "../categoria.service";

@Component({
  selector: "app-categoria-create",
  templateUrl: "./categoria-create.component.html",
  styleUrls: ["./categoria-create.component.css"],
})
export class CategoriaCreateComponent implements OnInit {
  categoria: Categoria = {
    nome: "",
    descricao: "",
  };

  constructor(private service: CategoriaService, private rota: Router) {}

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.categoria).subscribe(
      (resposta) => {
        //console.log(resposta);
        this.service.mensagem('Categoria criada com sucesso!');
        this.rota.navigate(['categorias']);
      },
      err => {
        for (let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message);
        }
      })
  }
}
