import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emp:Employee={eid:111,
    ename:'gopal',
    Salary:25000,
    doj:new Date('2/12/2012')};
  constructor(private empservice:EmpService) { }

  ngOnInit(): void {
  }

  add(){
    this.empservice.AddEmployee(this.emp);
  }

}
