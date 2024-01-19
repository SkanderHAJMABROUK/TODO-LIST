import { Component, OnInit } from '@angular/core';
import { faTrash, faList, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  faTrash = faTrash;
  faList = faList;
  faPenToSquare = faPenToSquare;

  todoList: Todo[] = [];
  filteredTodoList: Todo[] = [];
  searchTerm: string = '';
  selectedTodo: Todo = {} as Todo;

  constructor(public todoService: TodoService, private router: Router) {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('signin');
    }
  }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe((response) => {
      this.todoList = response;
      this.filteredTodoList = this.todoList; // Initialize filteredTodoList with all todos initially
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe((response) => {
      this.todoList = response;
      this.filteredTodoList = this.todoList; // Update filteredTodoList after deleting a todo
    });
  }

  showTodoDetail(todo: Todo) {
    this.todoService.getTodoById(todo).subscribe((response) => {
      this.selectedTodo = response!;
      this.todoService.todoDetailShowModal = true;
    });
  }

  showTodoUpdate(todo: Todo) {
    this.todoService.getTodoById(todo).subscribe((response) => {
      this.selectedTodo = response!;
      this.todoService.todoUpdateShowModal = true;
    });
  }

  searchTodo() {
    // Filter the todoList based on the searchTerm
    this.filteredTodoList = this.todoList.filter((todo) =>
      todo.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
