import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { TodoService } from './../../services/todo/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit {

  @Input() todo: any;
  isEditMode = false;
  editTodoData;
  
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  deleteTodo(key){
    this.todoService.deteleTodo(key);
  }

  toggleEditMode(){
    this.editTodoData = JSON.parse(JSON.stringify(this.todo));
    this.isEditMode = !this.isEditMode;
  }

  updateTodo(key, data){
    
    let newData = {
      task : data,
      status: 'incomplete'
    } 

    this.todoService.updateTodo(key, newData)
  }

  completeTodo(key, data){

    let newData = Object.assign({}, this.todo.data)
    newData.status = "complete";
    console.log(newData);
    //console.log(newData.data.status);

    this.todoService.updateTodo(key, newData)
  }

  

}
