import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';

import { TodoService } from './../../services/todo/todo.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [TodoService]
})
export class ProfileComponent implements OnInit {

  todos:any;
  todoSubscription;
  groupTodos:any;

  constructor(private todoService:TodoService , private authService:AuthService) { }

  ngOnInit() {
    
    this.todoSubscription = this.todoService.getData()
    .snapshotChanges()
    .map(todos => {
      let mapTodo = [];
      for(let key in todos.payload.val()){
        mapTodo.push({
          'key':key,
          data: todos.payload.val()[key]
        });
      }
      return mapTodo;      
    })
    .subscribe(todos =>{
      this.todos = todos;      
      this.groupTodos = _.groupBy(this.todos,function(t:any){
        return t.data.status;
      })
      
      console.log(this.groupTodos.complete.length);
      
    })
  }

  ngOnDestroy(){
    this.todoSubscription.unsubscribe();
  }

}
