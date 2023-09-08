import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Product } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private router: ActivatedRoute, private http: HttpClient) {}
  id$ = this.router.paramMap.pipe(map((params) => params.get('productId')));
  productData: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };
  ngOnInit() {
    this.id$
      .pipe(
        switchMap((id) =>
          this.http.get<Product>('https://fakestoreapi.com/products/' + id)
        )
      )
      .forEach((product) => (this.productData = product));
  }
}
