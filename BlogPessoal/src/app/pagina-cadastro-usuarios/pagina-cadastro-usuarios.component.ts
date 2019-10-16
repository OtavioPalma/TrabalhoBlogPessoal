import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/app.service';

@Component({
  selector: 'app-pagina-cadastro-usuarios',
  templateUrl: './pagina-cadastro-usuarios.component.html',
  styleUrls: ['./pagina-cadastro-usuarios.component.css']
})
export class PaginaCadastroUsuariosComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Cadastrar Usuário');
  }

}
