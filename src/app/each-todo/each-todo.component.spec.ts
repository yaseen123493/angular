import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachTodoComponent } from './each-todo.component';

describe('EachTodoComponent', () => {
  let component: EachTodoComponent;
  let fixture: ComponentFixture<EachTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EachTodoComponent]
    });
    fixture = TestBed.createComponent(EachTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
