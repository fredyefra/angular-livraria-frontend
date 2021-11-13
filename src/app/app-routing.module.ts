import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListComponent } from './component/views/livro/livro-list/livro-list.component';
import { CategoriaCreateComponent } from './components/view/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/view/categoria/categoria-delete/categoria-delete.component';
import { CategoriaListComponent } from './components/view/categoria/categoria-list/categoria-list.component';
import { CategoriaUpdateComponent } from './components/view/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/view/home/home.component';

/* Path = '' redireciona para a pagina home*/
const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
   
  /* Path = '' redireciona para a pagina categorias*/
  {
    path: 'categorias',
    component:CategoriaListComponent
  },
  
  /* Path = '' redireciona para criar nova categoria*/
  {
    path: 'categorias/create',
    component:CategoriaCreateComponent
  },
  
  /* Path = '' redireciona para excluir categoria com id*/
  {
   path: 'categorias/delete/:id',
   component:CategoriaDeleteComponent
  },

   /* Path = '' redireciona para atualizar categoria com id*/
  {
    path: 'categorias/update/:id',
    component:CategoriaUpdateComponent
  },  

  /* Path = '' redireciona para atualizar categoria com id*/
  {
    path: 'categorias/:categoria_id/livros',
    component:LivroListComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
