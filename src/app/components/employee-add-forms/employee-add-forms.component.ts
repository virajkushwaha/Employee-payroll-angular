import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-add-forms',
  imports: [FormsModule],
  templateUrl: './employee-add-forms.component.html',
  styleUrl: './employee-add-forms.component.css'
})
export class EmployeeAddFormsComponent {

  http  = inject(HttpClient);
  router = inject(Router);

  formatDate(date:string):string{
    if (date) {
      let dates = new Date(date);
      let day = dates.getDate();
      let month = dates.toLocaleString('en-US', { month: 'short' }); // "Mar"
      let year = dates.getFullYear();
      
      let formattedDate = `${day} ${month} ${year}`;
      return formattedDate;
  }
    return date
  }
  formatedDate:string = "";
  employeeObject:any = {
    name: '',
    salary:0,
    gender:'',
    startDate:`${this.formatDate(this.formatedDate)}`,
    note:'',
    profilePic:'',
    department:''
  }

  

  saveEmp(){
    this.http.post("http://localhost:8080/emp" , this.employeeObject).subscribe((res:any)=>{
        console.log(res);
        this.router.navigate([""]);
    });
  }
  homePage(){
    this.router.navigate([""]);
  }

 
}
