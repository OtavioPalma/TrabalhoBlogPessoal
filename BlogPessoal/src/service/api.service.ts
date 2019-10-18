import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Post } from 'src/model/post';
import { Usuario } from 'src/model/usuario';
import { Comentario } from 'src/model/comentario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:5000/api/posts')
      .pipe(catchError(this.handleError('getPosts', []))
      );
  }

  getPost(id): Observable<Post> {
    return this.http.get<Post>(`http://localhost:5000/api/post/${id}`)
      .pipe(catchError(this.handleError<Post>(`getPost id = ${id}`)));
  }

  addPost(post): Observable<Post> {
    return this.http.post<Post>('http://localhost:5000/api/posts', post, httpOptions)
      .pipe(catchError(this.handleError<Post>('addPost')));
  }

  updatePost(id, post): Observable<any> {
    return this.http.put(`http://localhost:5000/api/post/${id}`, post, httpOptions)
      .pipe(catchError(this.handleError<Post>('addPost')));
  }

  deletePost(id): Observable<Post> {
    return this.http.delete<Post>(`http://localhost:5000/api/post/${id}`, httpOptions)
      .pipe(catchError(this.handleError<Post>('deletePost')));
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:5000/api/users')
      .pipe(catchError(this.handleError(`getUsers`, [])));
  }

  addUser(user): Observable<Usuario> {
    return this.http.post<Usuario>("http://localhost:5000/api/user", user, httpOptions)
      .pipe(catchError(this.handleError<Usuario>('addUser')));
  }

  getComments(post_id): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(`http://localhost:5000/api/comments/${post_id}`)
      .pipe(catchError(this.handleError<Comentario[]>(`getComment post_id = ${post_id}`, [])));
  }

  addComment(comment): Observable<Comentario> {
    return this.http.post<Comentario>('http://localhost:5000/api/comments', comment, httpOptions)
      .pipe(catchError(this.handleError<Comentario>('addComment')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}