import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Post } from 'src/model/post';
import { AppService } from 'src/service/app.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-pagina-post',
  templateUrl: './pagina-post.component.html',
  styleUrls: ['./pagina-post.component.css']
})

export class PaginaPostComponent implements OnInit {
  title: string;
  body: string;

  dataSource: Post[];

  constructor(
    private _api: ApiService,
    private appService: AppService,
    public dialog: MatDialog) { }

  edit() {
    this.dialog.open(PostEditDialogComponent, {
      data: {
        animal: 'panda'
      },
      width: '80%',
      panelClass: 'my-class'
    });
  }

  ngOnInit() {
    this.appService.setTitle('Página Principal');
    this._api.getPosts().subscribe(res => {
      this.dataSource = res;
    }, err => {
      console.log(err);
    });
  }
}

@Component({
  selector: 'post-edit-dialog',
  templateUrl: 'post-edit-dialog.html',
})
export class PostEditDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}
