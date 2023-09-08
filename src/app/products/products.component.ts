import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  storeData: Product[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((response) => {
        this.storeData = response;
      });
  }
}
