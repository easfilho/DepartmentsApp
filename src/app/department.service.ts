import { Department } from './model/department.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    { id: 1, name: 'Clothing'},
    { id: 2, name: 'Books'}
  ];

  constructor() { }

  getDepartments(): Department[] {
    return this.departments;
  }

  addDepartment(department: Department) {
    department.id = this.departments.length + 1;
    this.departments.push(department);
  }

  getDepartment(id: number): Department {
    return this.departments.find(d => d.id === id);
  }
}
