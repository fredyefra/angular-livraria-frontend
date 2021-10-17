import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavigatorComponent } from './components/template/navigator/navigator.component'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'; 
import { HomeComponent } from './components/view/home/home.component';
import {MatTableModule} from '@angular/material/table'; 
import { CategoriaListComponent } from './components/view/categoria/categoria-list/categoria-list.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { CategoriaCreateComponent } from './components/view/categoria/categoria-create/categoria-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    HomeComponent,
    CategoriaListComponent,
    CategoriaCreateComponent
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
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
