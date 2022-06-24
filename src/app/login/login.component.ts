import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empname = "Hyderabad";
  greet:string;
  variable:string;
  constructor(private empservice:EmpService) {

   }

  ngOnInit(): void {
  }

  login(): void{
    this.greet = "Welcome " + this.empname;
    this.variable = this.empservice.cname();
    console.log(this.greet);
  }

}
