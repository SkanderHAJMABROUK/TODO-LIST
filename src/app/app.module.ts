import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { TodoPipe } from './todo.pipe';
import { TodoDirective } from './todo.directive';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    TodoDetailComponent,  
    TodoTemplateDrivenFormComponent,
    TodoReactiveFormComponent,
    TodoPipe,
    TodoDirective,
    TodoListComponent,
    TodoUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    //importer pour manipulr formulaire dupdate
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'signin',component:TodoReactiveFormComponent},
      {path:'',component:TodoListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
