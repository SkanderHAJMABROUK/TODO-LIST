import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form.component';

describe('TodoTemplateDrivenFormComponent', () => {
  let component: TodoTemplateDrivenFormComponent;
  let fixture: ComponentFixture<TodoTemplateDrivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoTemplateDrivenFormComponent]
    });
    fixture = TestBed.createComponent(TodoTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
