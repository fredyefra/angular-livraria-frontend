import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LivroService } from "../livro.service";
import { Livro } from "../livro.model"
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-livro-create",
  templateUrl: "./livro-create.component.html",
  styleUrls: ["./livro-create.component.css"],
})
export class LivroCreateComponent implements OnInit {
  
  titulo = new FormControl("",[Validators.minLength(3)])
  nome_autor = new FormControl("",[Validators.minLength(3)])
  texto = new FormControl("",[Validators.minLength(10)])

  livro: Livro = {
    titulo: "",
    nome_autor: "",
    texto: "",
  }

  constructor(private service: LivroService, private rota: Router) {}

  ngOnInit(): void {}

  message() {
    
    if (this.titulo.invalid){
      return "TITULO deve conter entre 3 e 100 caracteres.";
    }
     
    if (this.nome_autor.invalid){
      return "NOME DO AUTOR deve conter entre 3 e 100 caracteres.";
    }

    if (this.texto.invalid){
      return "TEXTO deve conter entre 10 e 2.000.000 caracteres.";
    }

    return false;
  }


  create(): void {
    this.service.create(this.livro).subscribe(
      (resposta) => {
        this.service.mensagem("Livro criado e associado a uma categoria com sucesso!");
        //this.rota.navigate(["livros"]);
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message);
        }
      }
    );
  }

  cancel(): void {
    this.rota.navigate(["livros"]);
  }
}
