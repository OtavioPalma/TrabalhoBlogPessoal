import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Post } from 'src/model/post';
import { AppService } from 'src/service/app.service';

@Component({
  selector: 'app-pagina-post',
  templateUrl: './pagina-post.component.html',
  styleUrls: ['./pagina-post.component.css']
})

export class PaginaPostComponent implements OnInit {

  posts: string[] = ['title', 'body', 'userId'];
  dataSource: Post[];

  constructor(private _api: ApiService, private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Página Principal');
    this._api.getPosts().subscribe(res => {
      this.dataSource = res;
    }, err => {
      console.log(err);
    });
  }

}
