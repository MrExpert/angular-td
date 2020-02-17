import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todos';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

  constructor(public http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo:Todo): Observable<Todo> {
    const url = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
