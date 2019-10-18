import { Component, OnInit } from '@angular/core';
import { Post } from 'src/model/post';
import { AppService } from 'src/service/app.service';
import { ApiService } from 'src/service/api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/model/comentario';

@Component({
  selector: 'app-pagina-comentarios',
  templateUrl: './pagina-comentarios.component.html',
  styleUrls: ['./pagina-comentarios.component.css']
})
export class PaginaComentariosComponent implements OnInit {
  commentForm: FormGroup;
  dataSource: Post;
  commentSource: Comentario[];

  post_id: number;

  constructor(
    private _api: ApiService,
    private appService: AppService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.init(this.route.snapshot.params['id']);
    this.appService.setTitle('Post');
    this.commentForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'body': [null, Validators.required],
      'email': [null, Validators.required],
      'post_id': [this.route.snapshot.params['id']]
    });
  }

  init(id) {
    this.post_id = id;
    this._api.getPost(id).subscribe(res => {
      this.dataSource = res;
    }, err => {
      console.log(err);
    });
    this.loadComments();
  }

  addComment(form: NgForm) {
    this._api.addComment(form)
      .subscribe(() => {
        this.loadComments();
      },
        err => {
          console.log(err);
        });
    this.commentForm.controls['title'].setValue("");
    this.commentForm.controls['title'].setErrors(null);
    this.commentForm.controls['body'].setValue("");
    this.commentForm.controls['body'].setErrors(null);
    this.commentForm.controls['email'].setValue("");
    this.commentForm.controls['email'].setErrors(null);
  }

  loadComments() {
    this._api.getComments(this.post_id).subscribe(res => {
      this.commentSource = res;
    }, err => {
      console.log(err);
    });
  }
}
