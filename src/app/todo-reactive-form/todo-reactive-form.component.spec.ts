import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoReactiveFormComponent } from './todo-reactive-form.component';

describe('TodoReactiveFormComponent', () => {
  let component: TodoReactiveFormComponent;
  let fixture: ComponentFixture<TodoReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoReactiveFormComponent]
    });
    fixture = TestBed.createComponent(TodoReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
