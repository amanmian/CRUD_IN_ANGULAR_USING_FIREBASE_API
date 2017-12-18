import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  model;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  setSaving(element, text){
    element.textContent = text;
  }

  refresh(): void {
    window.location.reload();
}

  onSubmit(form: NgForm)
  {
    if(form.value.$key=='')
    this.employeeService.insertEmployee(form.value);
    else
    this.employeeService.updateEmployee(form.value); 
    this.resetForm(form);
  }

  resetForm(form?: NgForm)
  {
    if (form!=null)
    form.reset();
    this.employeeService.selectedEmployee = {
      $key: '',
      name: '',
      office: '',
      position: '',
      salary: 0
    }
  }

  onDelete(form  : NgForm)
  {
      
    if(confirm('Pakka delete karna hai ?')==true)
    {
      this.employeeService.deleteEmployee(form.value.$key);
      this.resetForm(form);
    }
  }
}
