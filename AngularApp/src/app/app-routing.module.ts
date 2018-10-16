import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { MySelectionComponent } from './my-selection/my-selection.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
// import statements

const routes: Routes = [
  { 
    path: 'employee',
    component: EmployeeComponent 
  },
  { 
    path: 'my-selection', 
    component: MySelectionComponent 
  },
  {
    path: '',
    redirectTo: '/my-selection',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: SpecialEventsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
// declare routing paths 

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
