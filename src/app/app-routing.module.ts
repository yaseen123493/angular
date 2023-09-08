import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EachTodoComponent } from './each-todo/each-todo.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
    title: 'TODOS',
  },
  {
    path: 'todos/:id',
    component: EachTodoComponent,
  },
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'products',
  },
  {
    path: 'products/:productId',
    component: ProductComponent,
    title: 'product',
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
