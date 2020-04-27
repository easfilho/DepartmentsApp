import { Department } from './../model/department.model';

import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  constructor(private departmentService: DepartmentService) { }

  dapartmentName: string;

  ngOnInit(): void {
  }

  save() {
    const department = {name: this.dapartmentName};
    this.departmentService.addDepartment(department);
    this.clear();
  }

  clear() {
    this.dapartmentName = null;
  }

}
