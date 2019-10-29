import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { Busca } from 'src/model/busca';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-resultados-busca',
  templateUrl: './resultados-busca.component.html',
  styleUrls: ['./resultados-busca.component.css'],
  animations: [
    trigger('loadSearch', [
      state('initial', style({
        opacity: '0',
      })),
      state('final', style({
        opacity: '1',
      })),
      transition('initial=>final', animate('500ms')),
    ]),
  ]
})

export class ResultadosBuscaComponent implements OnInit {
  dataSource: Busca[];
  newSearch: string
  currentState = 'initial';

  constructor(
    private appService: AppService,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  changeState() {
    this.currentState = 'final';
  }

  ngOnInit() {
    this.appService.setTitle('Busca');
    this.loadData();
  }

  search(route) {
    this.currentState = 'initial';
    this.newSearch = route;
    this.router.navigateByUrl(`/busca/${route}`);
    this.api.getSearch(route).subscribe(res => {
      this.dataSource = res;
      this.newSearch = '';
      this.changeState();
    }, err => {
      console.log(err);
    });
  }

  loadData() {
    this.api.getSearch(this.route.snapshot.params['string']).subscribe(res => {
      this.dataSource = res;
      this.changeState();
    }, err => {
      console.log(err);
    });
  }
}
