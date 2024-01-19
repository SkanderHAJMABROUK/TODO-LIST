import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'todoPipe'
})
export class TodoPipe implements PipeTransform {

  transform(todo: Todo): string {
    let myClass: string = 'todo';
    let done: boolean=todo.done;
    let today = new Date();
    let todoDate = new Date(todo.date);
    if (todoDate.getTime() - today.getTime() <= 2 * 3600 * 24 * 1000 && todo.done==false) {
      myClass = myClass + ' border border-danger border-3';
    } 
    return myClass;
  }
}
