import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userData = {
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: ''
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(data: any){
    data.isAdmin = false;
    this.loginService.signup(data).subscribe(response => {
      sessionStorage.setItem("userData", JSON.stringify(response)); 
      this.router.navigate(['haggle']);
    });
  }

}
