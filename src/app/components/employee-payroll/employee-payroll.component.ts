import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-payroll',
  imports: [CommonModule],
  templateUrl: './employee-payroll.component.html',
  styleUrl: './employee-payroll.component.css'
})
export class EmployeePayrollComponent implements OnInit {
  employeeList : any[] = [];
  noImageUrl = "../assets/299106_profile_icon.png"
  ngOnInit(): void {
    this.http.get("http://localhost:8080/emp").subscribe((res:any)=>{
      this.employeeList = res;
    })
  }
  constructor(private http: HttpClient, private router: Router) {}

  addEmployee(){
    this.router.navigate(['/add'])
  }

  updateEmployee(id:number){
    this.router.navigate(['/update', id]);
  }

  deleteEmployee(id: number) {
    this.http.delete(`http://localhost:8080/emp/delete/${id}`, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          console.log("Employee deleted successfully:", res);
          // Remove the deleted employee from the list without reloading the page
          this.employeeList = this.employeeList.filter(emp => emp.id !== id);
        },
        error: (err) => {
          console.error("Error deleting employee:", err);
        }
      });
  }
}
