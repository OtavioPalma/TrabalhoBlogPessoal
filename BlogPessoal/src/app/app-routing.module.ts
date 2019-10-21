import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaCadastroUsuariosComponent } from './pagina-cadastro-usuarios/pagina-cadastro-usuarios.component';
import { PaginaContatoComponent } from './pagina-contato/pagina-contato.component';
import { PaginaNovoPostComponent } from './pagina-novo-post/pagina-novo-post.component';
import { PaginaSobreComponent } from './pagina-sobre/pagina-sobre.component';
import { PaginaPostComponent } from './pagina-post/pagina-post.component';
import { PaginaComentariosComponent } from './pagina-comentarios/pagina-comentarios.component';
import { ResultadosBuscaComponent } from './resultados-busca/resultados-busca.component';


const routes: Routes = [
  {
    path: 'cadastro-usuarios',
    component: PaginaCadastroUsuariosComponent,
    data: { title: 'Cadastrar Usuários' }
  },
  {
    path: 'contato',
    component: PaginaContatoComponent,
    data: { title: 'Contato' }
  },
  {
    path: 'novo-post',
    component: PaginaNovoPostComponent,
    data: { title: 'Novo Post' }
  },
  {
    path: 'post',
    component: PaginaPostComponent,
    data: { title: 'Página Principal' }
  },
  {
    path: 'sobre',
    component: PaginaSobreComponent,
    data: { title: 'Sobre' }
  },
  {
    path: 'comentario/:id',
    component: PaginaComentariosComponent,
    data: { title: 'Comentários' }
  },
  {
    path: 'busca/:string',
    component: ResultadosBuscaComponent,
  },
  {
    path: '',
    redirectTo: '/post',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
