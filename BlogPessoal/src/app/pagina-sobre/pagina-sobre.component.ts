import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { AppService } from 'src/service/app.service';

@Component({
  selector: 'app-pagina-sobre',
  templateUrl: './pagina-sobre.component.html',
  styleUrls: ['./pagina-sobre.component.css']
})
export class PaginaSobreComponent implements OnInit {
  menu: MenuComponent;

  constructor(private appService: AppService,
    menu: MenuComponent) {
    this.menu = menu;
    this.menu.show = true;
  }

  ngOnInit() {
    this.appService.setTitle('Sobre');
  }

}
