import { Component , Input} from '@angular/core';
import { Todo } from '../todo'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {

  faCheck=faCheck
  @Input() todo!:Todo

  // On a injecté le TodoService
  constructor(public todoService:TodoService){}

  updateDoneTodo(todo:Todo)
  {
    todo.done=!todo.done
    this.todoService.updateTodo(todo).subscribe
    (
      response=>this.todo=response
    )
  }

}
