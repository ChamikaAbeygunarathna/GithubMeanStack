import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
// import statements

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
// include all components which include in this class

export class RegisterComponent implements OnInit {
  // export class name in EmployeeComponent. and Define an 
  // ngOnInit() method to handle any additional initialization tasks


  registerUserData = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['/employee'])
        },
        err => console.log(err)
      )
  }

// this will route to employee add keyword page
}
