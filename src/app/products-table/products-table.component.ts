import { MatTable } from '@angular/material/table';
import { Product } from './../model/product.model';
import { ProductService } from './../product.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild(MatTable)
  dataTable: MatTable<any>;

  products: Product[];
  productColumns: string[] = ['id', 'name', 'price', 'description', 'department'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.onNewProductEvent.subscribe(product => {
      this.dataTable.renderRows();
    });
  }

}
