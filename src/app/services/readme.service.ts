import { Injectable } from '@angular/core';
import { SERVER_URL } from '../../variables';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadmeService {
  constructor(private _http: HttpClient) {
  }

  getReadme() {
    return this._http.get('https://raw.githubusercontent.com/ajp76054/todo-app-interview/master/README.md', {responseType: 'text'})
    
  }
}