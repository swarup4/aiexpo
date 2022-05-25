import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checked = false;
  userData: any = {
    email: "",
    password: ""
  };
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(userData: any){
    this.loginService.login(userData).subscribe(res => {
      sessionStorage.setItem("userData", JSON.stringify(res)); 
      this.router.navigate(['haggle']);
    })
    
  }

}
