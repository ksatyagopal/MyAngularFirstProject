import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empname = "";
  password = "";
  constructor(private empservice:EmpService,private route:Router) {

   }

  ngOnInit(): void {
  }

  login(): void{
    sessionStorage.setItem("ename",this.empname);
    if(this.empname=="admin" && this.password=="admin"){
      this.route.navigateByUrl("dashboard");
    }
    else{
      this.route.navigateByUrl("login")
    }
    
  }

}
