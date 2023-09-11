import { ServicesService } from './../services.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  // storeData: Product[] = [];
  storeData$: Observable<Product[]> = this.apiServices.getProducts();

  constructor(private apiServices: ServicesService) {}
  // ngOnInit() {
  //   this.apiServices
  //     .getProducts()
  //     .subscribe((products) => (this.storeData = products));
  // }
}
