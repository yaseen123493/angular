import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Observable,
  catchError,
  map,
  switchMap,
  throwError,
  throwIfEmpty,
} from 'rxjs';
import { Product } from 'src/types';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  constructor(
    private router: ActivatedRoute,
    private apiService: ServicesService
  ) {}

  id$ = this.router.paramMap.pipe(map((params) => params.get('productId')));
  productData$: Observable<Product> = this.id$.pipe(
    switchMap((id) =>
      this.apiService.getProduct(id).pipe(
        catchError((err) => {
          return throwError(err);
        })
      )
    )
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
