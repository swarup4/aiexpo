import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checked = true;
  userData: any = {
    username: "",
    password: "",
    isAdmin: false
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  login(userData: any){
    userData.isAdmin = true;
    sessionStorage.setItem("userData", JSON.stringify(userData)); 
  }

}
