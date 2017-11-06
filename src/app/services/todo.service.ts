import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TodoService {

  
  constructor(private db:AngularFireDatabase) { }

  getData(){
     return this.db.list('/todos');
  }

  deteleTodo(deleteKey)
  {
    console.log(deleteKey);
    return this.db.list('/todos').remove(deleteKey);
  }

  addTodo(data){
    return this.db.list('/todos').push(data);
  }  
}
