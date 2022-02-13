import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: "app-livro-delete",
  templateUrl: "./livro-delete.component.html",
  styleUrls: ["./livro-delete.component.css"],
})
export class LivroDeleteComponent implements OnInit {
  id_cat: string = "";

  livro: Livro = {
    identificador: "",
    titulo: "",
    nomeAutor: "",
    texto: "",
  };

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



  delete(): void{
  this.service.delete(this.livro.identificador!).subscribe(()=>{
  this.rota.navigate([`categorias/${this.id_cat}/livros`]);
  this.service.mensagem("Livro excluído com sucesso!") 
  }, err => {
  this.rota.navigate([`categorias/${this.id_cat}/livros`]);
  this.service.mensagem("Falha ao excluir livro!")  
  }) 
  
}

cancel(): void {
  this.rota.navigate([`categorias/${this.id_cat}/livros`]);
}


}
