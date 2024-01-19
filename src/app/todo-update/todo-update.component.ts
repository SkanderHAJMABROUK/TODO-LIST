import { Component , Input} from '@angular/core';
import { Todo } from '../todo'
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent {

  @Input() todo!:Todo
  constructor(public todoService:TodoService){

  }
  updateTodo(){

    this.todoService.updateTodo(this.todo).subscribe(
      response=>window.location.reload())
    //le rechargement de ma page 

  }
}
