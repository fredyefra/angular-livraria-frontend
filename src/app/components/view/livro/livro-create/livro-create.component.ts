import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LivroService } from "../livro.service";
import { Livro } from "../livro.model"
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-livro-create",
  templateUrl: "./livro-create.component.html",
  styleUrls: ["./livro-create.component.css"],
})
export class LivroCreateComponent implements OnInit {
  
  id_cat:string = "" 

  titulo = new FormControl("",[Validators.minLength(3)])
  nomeAutor = new FormControl("",[Validators.minLength(3)])
  texto = new FormControl("",[Validators.minLength(10)])

  livro: Livro = {
    identificador: "",
    titulo: "",
    nomeAutor: "",
    texto: "",
  }

  constructor(private service: LivroService, private rota: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
  }

  message() {
    
    if (this.titulo.invalid){
      return "TITULO deve conter entre 3 e 100 caracteres.";
    }
     
    if (this.nomeAutor.invalid){
      return "NOME DO AUTOR deve conter entre 3 e 100 caracteres.";
    }

    if (this.texto.invalid){
      return "TEXTO deve conter entre 10 e 2.000.000 caracteres.";
    }

    return false;
  }


  create(): void {
    this.service.create(this.livro, this.id_cat).subscribe((resposta) => {
        this.rota.navigate([`categorias/${this.id_cat}/livros`]);
        this.service.mensagem("Livro criado e associado a uma categoria com sucesso!");
        console.log(this.id_cat)
        console.log(this.livro.identificador)
      },err=>{
        this.rota.navigate([`categorias/${this.id_cat}/livros`]);
        this.service.mensagem("Erro ao criar novo livro!");
    });
  }
  
  cancel(): void {
    this.rota.navigate(["livros"]);
  }
}
