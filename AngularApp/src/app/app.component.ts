import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import statemnts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// declare components

export class AppComponent {
  title = 'AngularApp';
  constructor(private _authService: AuthService,private http: HttpClient){

  }
  ngOnInit(){
  }
}
console.log("hello angular 6");
