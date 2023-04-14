import { Injectable } from '@angular/core';
import { SERVER_URL } from '../../variables';
import { HttpClient } from '@angular/common/http';
import { ITodos } from '../models/todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private _http: HttpClient) {}

  getTodos() {
    return this._http.get(SERVER_URL + '/todos');
  }

  getTodoById(id: number) {
    return this._http.get(SERVER_URL + '/todos/' + id);
  }

  addTodo(todo: ITodos) {
    return this._http.post(SERVER_URL + '/todos/', todo);
  }

  deleteTodo(id: number) {
    return this._http.delete(SERVER_URL + '/todos/' + id);
  }

  patchTodo(id: number, todo: Object) {
    return this._http.patch(SERVER_URL + '/todos/' + id, todo);
  }
}
