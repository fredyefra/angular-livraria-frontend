import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './components/view/categoria/categoria-create/categoria-create.component';
import { CategoriaListComponent } from './components/view/categoria/categoria-list/categoria-list.component';
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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
