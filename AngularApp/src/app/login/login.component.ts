import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
// import statements

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// include all components which include in this class

export class LoginComponent implements OnInit {
  // export class name in EmployeeComponent. and Define an 
  // ngOnInit() method to handle any additional initialization tasks

  loginUserData = {}

  constructor(private _auth: AuthService,
    private _router: Router) { }
  // import AuthService, Router

  ngOnInit() {
  }
  // constructor and ngOnInit method which are executed on component load.
  // Constructor is used to create new instance of a class.

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['events'])
        },
        err => console.log(err)
      )
  }
  // involke login(), with token

}
