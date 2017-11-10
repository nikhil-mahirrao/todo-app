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

    let newData = {
      task : this.todo,
      status: 'incomplete'
    }

    this.todoService.addTodo(newData);
    this.todo = "";
  }
}
