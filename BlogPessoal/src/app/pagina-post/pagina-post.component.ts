import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Post } from 'src/model/post';
import { AppService } from 'src/service/app.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

export interface DialogData {
}

@Component({
  selector: 'app-pagina-post',
  templateUrl: './pagina-post.component.html',
  styleUrls: ['./pagina-post.component.css'],
  animations: [
    trigger('loadPost', [
      state('initial', style({
        opacity: '0',
        transform: 'scale(0)'
      })),
      state('final', style({
        opacity: '1',
        transform: 'scale(1)'
      })),
      transition('initial=>final', animate('1000ms')),
    ]),
  ]
})

export class PaginaPostComponent implements OnInit {
  title: string;
  body: string;
  data: any;
  dataSource: Post[];
  newDataSource: Post;
  editSource: Post;
  currentState = 'initial';
  p: number = 1;

  constructor(
    private _api: ApiService,
    private appService: AppService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.appService.setTitle('Página Principal');
    this.loadPosts();
  }

  changeState() {
    this.currentState = 'final';
  }

  openDialog(event, id) {
    this._api.getPost(id).subscribe(res => {
      this.editSource = res;
      this.send(id);
    }, err => {
      console.log(err);
    });
  }

  deletePost(event, id) {
    this._api.deletePost(id).subscribe(() => {
      this.loadPosts();
    }, err => {
      console.log(err);
    });
  }

  send(id) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: this.editSource[0].title,
      body: this.editSource[0].body,
      id: this.editSource[0].id,
      post_id: id
    };

    const dialogRef = this.dialog.open(PostDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data =>
        this._api.updatePost(id, data).subscribe(res => {
          this.newDataSource = res;
          this.loadPosts();
        }, err => {
          console.log(err);
        })
    );
  }

  loadPosts() {
    this._api.getPosts().subscribe(res => {
      this.dataSource = res;
      this.changeState();
    }, err => {
      console.log(err);
    });
  }
}