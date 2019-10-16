import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Post } from 'src/model/post';
import { Usuario } from 'src/model/usuario';

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
      .pipe(
        catchError(this.handleError('getPosts', []))
      );
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:5000/api/users')
      .pipe(
        catchError(this.handleError(`getUsers`, []))
      );
  }

  addPost(post): Observable<Post> {
    return this.http.post<Post>('http://localhost:5000/api/posts', post, httpOptions).pipe(
      tap((post: Post) => console.log(`adicionou o post com w/ id=${post._id}`)),
      catchError(this.handleError<Post>('addPost'))
    );
  }

  updatePost(id, post): Observable<Post> {
    const url = `${'http://localhost:5000/api/posts'}/${id}`;
    return this.http.put(url, post, httpOptions).pipe(
      tap(_ => console.log(`atualiza o post com id=${id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

  deletePost(id): Observable<Post> {
    const url = `${'http://localhost:5000/api/posts'}/delete/${id}`;

    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o post com id=${id}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}