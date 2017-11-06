import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {

  todos:any;
  constructor(private todoService:TodoService) {
    //this.todoService()
   }

  ngOnInit() {

    this.todoService.getData().snapshotChanges()
    .subscribe(todos =>{
      //console.log(todos);
      this.todos = todos;
      //console.log(this.todos);
    })
  }

}
