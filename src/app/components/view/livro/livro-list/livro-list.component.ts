import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Categoria } from "src/app/components/view/categoria/categoria.model";
import { Livro } from "../../../../components/view/livro/livro.model";
import { LivroService } from "../../../../components/view/livro/livro.service";

@Component({
  selector: "app-livro-list",
  templateUrl: "./livro-list.component.html",
  styleUrls: ["./livro-list.component.css"],
})
export class LivroListComponent implements OnInit {
  displayedColumns: string[] = ["identificador", "titulo", "livros", "acoes"];

  livros: Livro[] = [];

  categoria_id: string = "";

  /* livro:   Livro = {
    identificador: "",
    titulo: "",
    
  }; */

  constructor(private service: LivroService, private rota: Router, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoria_id = this.router.snapshot.paramMap.get("categoria_id")!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategoria(this.categoria_id).subscribe((resposta) => {
      this.livros = resposta;
      console.log(this.livros);
    });
  }

  novoLivro(): void{
    this.rota.navigate([`/categorias/${this.categoria_id}/livros/create`]);
  }


}
