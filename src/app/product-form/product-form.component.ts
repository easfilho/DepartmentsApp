import { DepartmentService } from './../department.service';
import { ProductService } from './../product.service';
import { Department } from './../model/department.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private departmentService: DepartmentService
  ) {}

  name: string;
  department: Department;
  price: number;
  description: string;
  departments: Department[];

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
  }

  save() {
    const product = {
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    };
    this.productService.addProduct(product);
    this.clear();
  }

  clear() {
    this.name = null;
    this.price = null;
    this.description = null;
    this.department = null;
  }
}
