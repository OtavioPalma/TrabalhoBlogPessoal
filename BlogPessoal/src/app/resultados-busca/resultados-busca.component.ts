import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Busca } from 'src/model/busca';

@Component({
  selector: 'app-resultados-busca',
  templateUrl: './resultados-busca.component.html',
  styleUrls: ['./resultados-busca.component.css']
})
export class ResultadosBuscaComponent implements OnInit {
  dataSource: Busca[];

  constructor(
    private appService: AppService,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.appService.setTitle('Busca');
    this.loadData();
  }

  loadData() {
    this.api.getSearch(this.route.snapshot.params['string']).subscribe(res => {
      this.dataSource = res;
    }, err => {
      console.log(err);
    });
  }
}
