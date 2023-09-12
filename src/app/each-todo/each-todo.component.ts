import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-each-todo',
  templateUrl: './each-todo.component.html',
  styleUrls: ['./each-todo.component.css'],
})
export class EachTodoComponent {
  id = this.router.paramMap.pipe(map((params) => params.get('id'))); // better approach
  constructor(private router: ActivatedRoute) {}
  // ngOnInit() {
  //   this.router.params.subscribe((params) => {
  //     this.id = params['id'];
  //   });
  // }
}
