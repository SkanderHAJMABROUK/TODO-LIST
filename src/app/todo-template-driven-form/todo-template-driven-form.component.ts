import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { pipe, Observable } from 'rxjs'
import { map, count} from 'rxjs/operators'
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-todo-template-driven-form',
  templateUrl: './todo-template-driven-form.component.html',
  styleUrls: ['./todo-template-driven-form.component.css']
})
export class TodoTemplateDrivenFormComponent  {

  todo:Todo=
    {id:0,
    title:"",
    date:new Date(),
    description:"",
    done:false}
   
    id:number=0
  constructor(public todoService:TodoService,
              private _router:Router){}


   ngOnInit(): void {
    this.todoService.getTodoList().subscribe(
      response=>
        this.todo.id=response.length+1
    )
   }

    addTodo(){
      this.todoService.addTodo({...this.todo, id:this.id}).subscribe(
        response=>window.location.reload()
      )
     
    }
   
  }