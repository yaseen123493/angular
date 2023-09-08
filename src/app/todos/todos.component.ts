import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  constructor() {}
  loading = true;
  onInitData: any;
  alert = false;
  allItems = [{ description: 'eat', done: true }];

  ngOnInit(): void {
    setTimeout(() => {
      this.onInitData = 'This is async text on initialization of page!';
      this.loading = false;
    }, 2000);
  }

  addTodo(description: string) {
    if (description) {
      this.allItems.push({
        description,
        done: false,
      });
      this.alert = false;
    } else {
      this.alert = true;
    }
  }

  changeDone(description: string) {
    this.allItems.map((item) => {
      if (item.description === description) {
        item.done = !item.done;
      }
    });
  }

  deleteItem(description: string) {
    let newList = this.allItems.filter(
      (item) => item.description !== description
    );
    this.allItems = newList;
  }
}
