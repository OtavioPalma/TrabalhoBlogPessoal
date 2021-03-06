import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from 'src/service/app.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaNovoPostComponent } from './pagina-novo-post/pagina-novo-post.component';
import { PaginaCadastroUsuariosComponent } from './pagina-cadastro-usuarios/pagina-cadastro-usuarios.component';
import { PaginaSobreComponent } from './pagina-sobre/pagina-sobre.component';
import { PaginaContatoComponent } from './pagina-contato/pagina-contato.component';
import { PaginaPostComponent } from './pagina-post/pagina-post.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatGridListModule,
  MatDialogModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PaginaComentariosComponent } from './pagina-comentarios/pagina-comentarios.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import { ResultadosBuscaComponent } from './resultados-busca/resultados-busca.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNovoPostComponent,
    PaginaCadastroUsuariosComponent,
    PaginaSobreComponent,
    PaginaContatoComponent,
    MenuComponent,
    PaginaPostComponent,
    PaginaComentariosComponent,
    PostDialogComponent,
    CommentDialogComponent,
    ResultadosBuscaComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    LayoutModule,
    MatGridListModule,
    MatDialogModule
  ],
  entryComponents: [
    PostDialogComponent,
    PaginaPostComponent,
    CommentDialogComponent
  ],
  providers: [
    AppService,
    MenuComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
