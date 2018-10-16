import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
// import statements

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
// create url which need authentication

  constructor(private http: HttpClient,
              private _router: Router) { }
// declare httpclients and routers

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }
// when register user, this will involke the post() 

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }
// when login user, this will involke the post()   

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/my-selection'])
  }
// when logout user, this will remove exsistence token and, it will route to my-selection 

  getToken() {
    return localStorage.getItem('token')
  }
// this will get token 

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
// when login this can login using token 
}
// end of class