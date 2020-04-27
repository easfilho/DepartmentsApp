import { DepartmentService } from './department.service';
import { Product } from './model/product.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  onNewProductEvent: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    product.id = this.products.length + 1;
    this.products.push(product);
    this.onNewProductEvent.emit(product);
  }

}
