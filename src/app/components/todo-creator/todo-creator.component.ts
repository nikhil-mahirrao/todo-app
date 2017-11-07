import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo/todo.service';


@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.scss']
})
export class TodoCreatorComponent implements OnInit {

  constructor(private todoService:TodoService) { }

  todo:string = "";

  ngOnInit() {
  }

  addTodo(){
    this.todoService.addTodo(this.todo);
    this.todo = "";
  }
}
