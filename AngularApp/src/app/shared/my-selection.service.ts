// THIS PAGE IS DEVELOPED FOR FUTURE MAINTENANCE

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { MySelection } from './my-selection.model';
// import statements

var handler;
// declare some variables

const headers = new HttpHeaders({
  'Authorization': '*',
  'Access-Control-Allow-Origin': 'https://jobs.github.com/positions.json?description=python&location=sf&full_time=true'
});

@Injectable()
export class MySelectionService {
  selectedEmployee: MySelection;
  employees: MySelection[];

  readonly baseURL = 'https://jobs.github.com/positions.json?description=python&location=sf&full_time=true';
  // set base url

  constructor(private http: HttpClient) {
    this.http.request("Access-Control-Allow-Origin", 'https://jobs.github.com/positions.json?description=python&location=sf&full_time=true');
    var invocation = new XMLHttpRequest();
    var url = 'https://jobs.github.com/positions.json?description=python&location=sf&full_time=true';

    function callOtherDomain() {
      if (invocation) {
        invocation.open('GET', url, true);
        invocation.onreadystatechange = handler;
        invocation.send();
      }
    }
  }

  postEmployee(emp: MySelection) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    console.log(this.http.get(this.baseURL, { headers }));
    this.http.request("Access-Control-Allow-Origin", 'https://jobs.github.com/positions.json?description=python&location=sf&full_time=true');
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: MySelection) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }


  createAuthorizationHeader(user, pass) {
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Authorization', 'Basic ' + btoa(user + ':' + pass));
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    console.log(headers);
    return this.http.get(this.baseURL, {
      headers: headers
    });
  }
// make autentication headers
}
