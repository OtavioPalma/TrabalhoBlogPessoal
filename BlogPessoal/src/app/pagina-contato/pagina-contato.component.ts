import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/app.service';
import { MenuComponent } from '../menu/menu.component';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-contato',
  templateUrl: './pagina-contato.component.html',
  styleUrls: ['./pagina-contato.component.css']
})
export class PaginaContatoComponent implements OnInit {
  contatoForm: FormGroup;
  menu: MenuComponent;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    menu: MenuComponent) {
      this.menu = menu;
      this.menu.show = true;
  }

  ngOnInit() {
    this.appService.setTitle('Contato');
    this.contatoForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'body': [null, Validators.required]
    });
  }

  sendMessage(form: NgForm) {
    this.contatoForm.controls['name'].setValue(null);
    this.contatoForm.controls['name'].setErrors(null);
    this.contatoForm.controls['body'].setValue(null);
    this.contatoForm.controls['body'].setErrors(null);
    this.contatoForm.controls['email'].setValue(null);
    this.contatoForm.controls['email'].setErrors(null);
  }

  clean() {
    this.contatoForm.controls['name'].setValue(null);
    this.contatoForm.controls['name'].setErrors(null);
    this.contatoForm.controls['body'].setValue(null);
    this.contatoForm.controls['body'].setErrors(null);
    this.contatoForm.controls['email'].setValue(null);
    this.contatoForm.controls['email'].setErrors(null);
  }
}
