// THIS PAGE IS DEVELOPED FOR SOME TESTING PURPOSES

import {Component, OnInit} from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-my-selection',
  templateUrl: './my-selection.componet.html',
  styleUrls: ['./my-selection.component.css']
})

export class MySelectionComponent implements OnInit{
  
userName: String = "";
responce:any;

constructor(private http: HttpClient) {
  
    
let headers = new HttpHeaders({
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Methods": "POST, GET",
  "Access-Control-Allow-Header": "Origin, X-Requested-With, Content-Type, Accept"
});
let options = { headers: headers };
  }
  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  search(){
    // let b = this.http.get('https://jobs.github.com/positions.json?description='+this.userName+'&location=sf&full_time=true')
    let b = this.http.get('https://jobs.github.com')
  .subscribe((responce)=>{
    this.responce = responce;
    console.log(this.responce);
    
  });
  if(this.responce == []){
    window.alert("TEST SUCCESS !");
  }
  }

  selectedValue: string;
}
