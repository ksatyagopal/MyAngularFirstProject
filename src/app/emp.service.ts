import { Injectable } from '@angular/core';
import { Employee } from './Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  comapanyName="Eurofins";
  empList:Employee[] = [{eid:100,ename:"Satya",Salary:1000.0,doj:new Date('1/1/2000')},
  {eid:100,ename:"Satya",Salary:1000.0,doj:new Date('1/1/2000')},
  {eid:100,ename:"Satya",Salary:1000.0,doj:new Date('1/1/2000')}];


  constructor() { 
  }
  cname():any{
    return this.comapanyName;
  }
  getEmployees():any{
    return this.empList;
  }
  AddEmployee(emp:Employee):void{
    this.empList.push(emp);
  }
}
