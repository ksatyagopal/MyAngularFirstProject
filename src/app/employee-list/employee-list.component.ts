import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
empList:Employee[];
  constructor(private empservie:EmpService) { }

  ngOnInit(): void {
    this.empList = this.empservie.getEmployees();
  }

}
