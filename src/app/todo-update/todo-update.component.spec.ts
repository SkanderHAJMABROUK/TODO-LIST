import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUpdateComponent } from './todo-update.component';

describe('TodoUpdateComponent', () => {
  let component: TodoUpdateComponent;
  let fixture: ComponentFixture<TodoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoUpdateComponent]
    });
    fixture = TestBed.createComponent(TodoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
