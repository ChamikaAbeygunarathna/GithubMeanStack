import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
// import statements

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
// include all components which include in this class

export class EmployeeComponent implements OnInit {
  // export class name in EmployeeComponent. and Define an 
  // ngOnInit() method to handle any additional initialization tasks


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    // involke resetForm ()

    this.refreshEmployeeList();
    // involke refreshEmployeeList ()

  }

  // constructor and ngOnInit method which are executed on component load.
  // Constructor is used to create new instance of a class.

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      //to use id
      position: "",
      // to use position

    }
  }
// this method reset forms value

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
// this will involk post        
        this.resetForm(form);
// involke resetForm 
        this.refreshEmployeeList();
// involke refreshEmployeeList 
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
// popup message
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
// this will involke put        
        this.resetForm(form);
// involke resetForm         
        this.refreshEmployeeList();
// involke refreshEmployeeList         
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
// popup message        
      });
    }
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }
// this is the refresh method

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }
// this is the mehtod which get selected value  

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
// confirmation message for delete      
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
// popup message        
      });
    }
  }
// this will involke delete ()  

}
