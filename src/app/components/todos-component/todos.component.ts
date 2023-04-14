import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodos } from '../../models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  host: { ['class']: 'col-12' },
})
export class TodoComponent implements OnInit {
  private arrTodo: Array<ITodos> = [];
  opened: boolean = false;

  todo: Object = { id: 0, title: '', completed: false };
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.arrTodo = data;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log('done');
      },
    });

    // this.todoService.getTodoById(1).subscribe({
    //   next: (data) => {
    //     this.todo = data;
    //   },
    //   error: (e) => {
    //     console.log(e);
    //   },
    //   complete: () => {
    //     console.log('done');
    //   },
    // });
  }

  getTodoId(id: number) {
    this.todoService.getTodoById(id).subscribe({
      next: (data) => {
        this.todo = data;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log('done');
      },
    });
  }

  postTodo(title: string, important: boolean) {
    this.todoService
      .addTodo({ id: 1, title: title, completed: important })
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe((data) => {
      this.arrTodo = this.arrTodo.filter((v, i) => i !== id);
    });
  }

  patchTodo(id: number, title: string, completed: boolean) {
    let todo = {
      id: id,
      title: title,
      completed: completed,
    };
    this.todoService.patchTodo(id, todo).subscribe((data) => {
      console.log(data);
    });
  }

  openTodoEdit(id: number) {
    this.opened = true;
  }
}
