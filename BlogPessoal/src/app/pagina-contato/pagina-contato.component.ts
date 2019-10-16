import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/app.service';

@Component({
  selector: 'app-pagina-contato',
  templateUrl: './pagina-contato.component.html',
  styleUrls: ['./pagina-contato.component.css']
})
export class PaginaContatoComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Contato');
  }

}
