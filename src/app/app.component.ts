import { Component } from '@angular/core';
import { ToDo } from './ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : ToDo[] = [];
  newToDo : string;

  saveToDo(){
    if(this.newToDo){
      let todo = new ToDo();
      todo.name = this.newToDo;
      todo.isCompleted = true
      this.todos.push(todo);
      this.newToDo = "";
    }else{
      alert('Please Entrer ToDo');
    }
  }

  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted
  }

  remove(id:number){
    this.todos = this.todos.filter((v,i)=> i !==id);
  }
}
