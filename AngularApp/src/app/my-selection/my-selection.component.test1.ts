//THIS PAGE IS ALSO DEVELOPED FOR SOME TESTING PURPOSES

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MySelectionService } from '../shared/my-selection.service';
import { MySelection } from '../shared/my-selection.model';
// import statements

declare var M: any;
// some declarations

@Component({
  selector: 'app-my-selection',
  templateUrl: './my-selection.componet.html',
  styleUrls: ['./my-selection.component.css'],
  providers: [MySelectionService]

})
// include all componets

export class MySelectionComponent implements OnInit {
// export name

  constructor(private employeeService: MySelectionService) { }
// involke with service class mehtods 

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }
// involke methods

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",      
      position: "",
      
    }
  }
// reset values 

  onSubmit(form: NgForm) {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as MySelection[];
      this.refreshEmployeeList();
    });
  }
// when button click this will be involked  

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as MySelection[];
      console.log(res);
    });
  }
// this one will be refresh the values

  onEdit(emp: MySelection) {
    this.employeeService.selectedEmployee = emp;
  }
// involke put()

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
// involke delete() 
}
// end of the class