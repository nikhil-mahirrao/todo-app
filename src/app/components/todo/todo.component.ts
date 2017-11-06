import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  @Input() todo: any;
  
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  deleteTodo(key){
    this.todoService.deteleTodo(key);
  }

}
