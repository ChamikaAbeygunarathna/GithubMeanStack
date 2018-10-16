import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import staement


@Component({
  selector: 'app-my-selection',
  templateUrl: './my-selection.componet.html',
  styleUrls: ['./my-selection.component.css']
})
// include all components which include in this class

export class MySelectionComponent implements OnInit {
  // export class name in EmployeeComponent. and Define an 
  // ngOnInit() method to handle any additional initialization tasks


  userName: String = "";
  responce: any;
  constructor(private http: HttpClient) {

  }
  // involk http

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  // constructor and ngOnInit method which are executed on component load.
  // Constructor is used to create new instance of a class.

  search() {
    // let b = this.http.get('http://localhost:3000/keywords/')//sample mehthod
    let b = this.http.get('https://jobs.github.com/positions.json?description=' + this.userName + '&location=sf&full_time=true')
      // this url get parameter from html page
      .subscribe((responce) => {
        this.responce = responce;
        console.log(this.responce);

      });
    if (this.responce == []) {
      window.alert("nothing");
    }
  }

  selectedValue: string;
}
// end of class
