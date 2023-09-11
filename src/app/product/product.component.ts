import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Product } from 'src/types';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(
    private router: ActivatedRoute,
    private apiService: ServicesService
  ) {}

  id$ = this.router.paramMap.pipe(map((params) => params.get('productId')));
  productData$: Observable<Product> = this.id$.pipe(
    switchMap((id) => this.apiService.getProduct(id))
  );
  // productData: Product = {
  //   id: 0,
  //   title: '',
  //   price: 0,
  //   description: '',
  //   category: '',
  //   image: '',
  //   rating: {
  //     rate: 0,
  //     count: 0,
  //   },
  // };
  // ngOnInit() {
  //   this.id$
  //     .pipe(switchMap((id) => this.apiService.getProduct(id)))
  //     .forEach((product) => (this.productData = product));
  // }
}
