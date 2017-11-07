import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TodoService {
  
  datapath:string = "";

  constructor(private db:AngularFireDatabase, private authService: AuthService) {
    this.datapath = authService.currentUser.uid+"/todos";
   }

  getData(){
     return this.db.list(this.datapath);
  }

  deteleTodo(deleteKey)
  {
    return this.db.list(this.datapath).remove(deleteKey);
  }

  addTodo(data){
    console.log(data);
    return this.db.list(this.datapath).push(data);
  }  
}
