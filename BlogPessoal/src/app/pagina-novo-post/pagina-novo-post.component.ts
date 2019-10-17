import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { Usuario } from 'src/model/usuario';
import { AppService } from 'src/service/app.service';

@Component({
  selector: 'app-pagina-novo-post',
  templateUrl: './pagina-novo-post.component.html',
  styleUrls: ['./pagina-novo-post.component.css']
})

export class PaginaNovoPostComponent implements OnInit {
  postForm: FormGroup;
  users: string[] = ['username', 'id'];
  dataSource: Usuario[];

  constructor(
    private router: Router,
    private _api: ApiService,
    private formBuilder: FormBuilder,
    private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Novo Post');
    this._api.getUsers().subscribe(res => {
      this.dataSource = res;
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
    this._api.addPost(form).subscribe(res => {
      console.log(form)
    }, (err) => {
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
