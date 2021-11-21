import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.model";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-update",
  templateUrl: "./livro-update.component.html",
  styleUrls: ["./livro-update.component.css"],
})
export class LivroUpdateComponent implements OnInit {
  id_cat: string = "";

  livro: Livro = {
    identificador: "",
    titulo: "",
    nomeAutor: "",
    texto: "",
  };

  titulo = new FormControl("", [Validators.minLength(3)]);
  nomeAutor = new FormControl("", [Validators.minLength(3)]);
  texto = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: LivroService,
    private rota: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.livro.identificador = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.livro.identificador!).subscribe((resposta) => {
      this.livro = resposta;
    });
  }

  update(): void {
    this.service.update(this.livro).subscribe(
      (resposta) => {
        this.rota.navigate([`categorias/${this.id_cat}/livros`]);
        this.service.mensagem("Livro atualizado com sucesso!");
      },
      (err) => {
        this.rota.navigate([`categorias/${this.id_cat}/livros`]);
        this.service.mensagem("Falha ao atualizar ... Tente mais tarde!");
      }
    );
  }

  cancel(): void {
    this.rota.navigate([`categorias/${this.id_cat}/livros`]);
  }

  message() {
    if (this.titulo.invalid) {
      return "TITULO deve conter entre 3 e 100 caracteres.";
    }

    if (this.nomeAutor.invalid) {
      return "NOME DO AUTOR deve conter entre 3 e 100 caracteres.";
    }

    if (this.texto.invalid) {
      return "TEXTO deve conter entre 10 e 2.000.000 caracteres.";
    }

    return false;
  }
}
