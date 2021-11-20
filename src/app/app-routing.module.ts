import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaCreateComponent } from "./components/view/categoria/categoria-create/categoria-create.component";
import { CategoriaDeleteComponent } from "./components/view/categoria/categoria-delete/categoria-delete.component";
import { CategoriaListComponent } from "./components/view/categoria/categoria-list/categoria-list.component";
import { CategoriaUpdateComponent } from "./components/view/categoria/categoria-update/categoria-update.component";
import { LivroListComponent } from "./components/view/livro/livro-list/livro-list.component";
import { HomeComponent } from "./components/view/home/home.component";
import { LivroCreateComponent } from "./components/view/livro/livro-create/livro-create.component";


/* Path = '' redireciona para a pagina home*/
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },

  {
    path: "categorias",
    component: CategoriaListComponent,
  },

  {
    path: "categorias/create",
    component: CategoriaCreateComponent,
  },

  {
    path: "categorias/delete/:id",
    component: CategoriaDeleteComponent,
  },

  {
    path: "categorias/update/:id",
    component: CategoriaUpdateComponent,
  },

  {
    path: "categorias/:id_cat/livros",
    component: LivroListComponent,
  }, 
  
  {
    path: "categorias/:id_cat/livros/create",
    component: LivroCreateComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
