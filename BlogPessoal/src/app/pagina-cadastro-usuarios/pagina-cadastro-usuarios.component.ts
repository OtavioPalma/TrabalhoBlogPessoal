import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/app.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-pagina-cadastro-usuarios',
  templateUrl: './pagina-cadastro-usuarios.component.html',
  styleUrls: ['./pagina-cadastro-usuarios.component.css']
})
export class PaginaCadastroUsuariosComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private _api: ApiService,
    private formBuilder: FormBuilder,
    private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Novo Usuário');
    this.userForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'username': [null, Validators.required],
      'email': [null, Validators.required]
    });
  }

  addUser(form: NgForm) {
    this._api.addUser(form).subscribe(err => {
      console.log(err);
    });
    this.userForm.controls['name'].setValue("");
    this.userForm.controls['name'].setErrors(null);
    this.userForm.controls['username'].setValue("");
    this.userForm.controls['username'].setErrors(null);
    this.userForm.controls['email'].setValue("");
    this.userForm.controls['email'].setErrors(null);
  }

}
