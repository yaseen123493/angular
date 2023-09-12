import { Component } from '@angular/core';
import { Product } from 'src/types';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private apiService: ServicesService) {}
  message: string = '';
  product: Product = {
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

  responseData: Product = {
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

  addProduct() {
    this.apiService.addProducts(this.product).subscribe((response) => {
      this.message = 'Successfully added your product';
      this.responseData = response;
    });
  }
}
