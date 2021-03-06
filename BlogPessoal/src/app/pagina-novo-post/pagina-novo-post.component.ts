import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { Usuario } from 'src/model/usuario';
import { MenuComponent } from '../menu/menu.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppService } from 'src/service/app.service';

@Component({
  selector: 'app-pagina-novo-post',
  templateUrl: './pagina-novo-post.component.html',
  styleUrls: ['./pagina-novo-post.component.css'],
  animations: [
    trigger('loadPost', [
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

export class PaginaNovoPostComponent implements OnInit {
  postForm: FormGroup;
  dataSource: Usuario[];
  currentState = 'initial';
  menu: MenuComponent;

  constructor(
    private _api: ApiService,
    private formBuilder: FormBuilder,
    private appService: AppService,
    menu: MenuComponent) {
    this.menu = menu;
    this.menu.show = true;
  }

  ngOnInit() {
    this.appService.setTitle('Novo Post');
    this._api.getUsers().subscribe(res => {
      this.dataSource = res;
      this.currentState = 'final';
    }, err => {
      console.log(err);
    });
    this.postForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'body': [null, Validators.required],
      'userId': [null, Validators.required]
    });
  }

  addPost(form: NgForm) {
    this._api.addPost(form).subscribe(err => {
      console.log(err);
    });
    this.postForm.controls['title'].setValue("");
    this.postForm.controls['title'].setErrors(null);
    this.postForm.controls['body'].setValue("");
    this.postForm.controls['body'].setErrors(null);
    this.postForm.controls['userId'].setValue(0);
    this.postForm.controls['userId'].setErrors(null);
  }
}
