import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throttleTime, throwError } from 'rxjs';
import { Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient, private route: Router) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[] | []>('https://fakestoreapi.com/products');
  }

  getProduct(id: string | null): Observable<Product> {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }

  addProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(
      'https://fakestoreapi.com/products',
      product
    );
  }

  isloggedin = false;
  login(email: string, password: string) {
    if (email && password) {
      return (this.isloggedin = true);
    }
    return this.isloggedin;
  }
}
