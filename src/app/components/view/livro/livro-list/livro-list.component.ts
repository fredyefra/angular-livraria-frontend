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

  id_cat: string = "";

  constructor(private service: LivroService, private rota: Router, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.id_cat = this.router.snapshot.paramMap.get("id_cat")!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.livros = resposta;
      console.log(this.livros);
    });
  }

  novoLivro(): void{
    this.rota.navigate([`/categorias/${this.id_cat}/livros/create`]);
  }
}
