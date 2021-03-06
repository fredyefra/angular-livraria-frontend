import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavigatorComponent } from "./components/template/navigator/navigator.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { HomeComponent } from "./components/view/home/home.component";
import { MatTableModule } from "@angular/material/table";
import { CategoriaListComponent } from "./components/view/categoria/categoria-list/categoria-list.component";
import { CdkTableModule } from "@angular/cdk/table";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { FormsModule,  ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CategoriaCreateComponent } from "./components/view/categoria/categoria-create/categoria-create.component";
import { CategoriaDeleteComponent } from './components/view/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/view/categoria/categoria-update/categoria-update.component';
import {MatDialogModule} from '@angular/material/dialog';
import {LivroListComponent} from './components/view/livro/livro-list/livro-list.component';
import { LivroCreateComponent } from "./components/view/livro/livro-create/livro-create.component";
import { LivroUpdateComponent } from './components/view/livro/livro-update/livro-update.component';
import {LivroDeleteComponent} from './components/view/livro/livro-delete/livro-delete.component';
import { LivroReadComponent } from './components/view/livro/livro-read/livro-read.component';
//import { LivroDeleteComponent } from './components/view/livro/livro-delete/livro-delete.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    HomeComponent,
    CategoriaListComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent,
    LivroListComponent,
    LivroCreateComponent,
    LivroUpdateComponent,
    LivroDeleteComponent,
    LivroReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    CdkTableModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
