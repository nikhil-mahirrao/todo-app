import { ActivatedRouteSnapshot } from '@angular/router';
import { TodoService } from './../../services/todo/todo.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

  todos:any;
  todoSubscription;

  constructor(private todoService:TodoService) {
   }

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
    })
  }

  ngOnDestroy(){
    this.todoSubscription.unsubscribe();
  }

}
