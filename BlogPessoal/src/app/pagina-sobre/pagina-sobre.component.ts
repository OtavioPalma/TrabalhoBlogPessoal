import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-pagina-sobre',
  templateUrl: './pagina-sobre.component.html',
  styleUrls: ['./pagina-sobre.component.css']
})
export class PaginaSobreComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Sobre');
  }

}
