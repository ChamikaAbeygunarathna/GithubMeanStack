import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Employee } from './employee.model';
// import statements

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = 'http://localhost:3000/keywords';
  // this url connect db by using express

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }
  // this is the method to post data

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }
  // this is the method to get data

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }
  // this is the method to put data

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  // this is the method to delete data
}
