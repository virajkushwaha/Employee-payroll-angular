import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  http = inject(HttpClient);
  route = inject(Router);
  routes = inject(ActivatedRoute);

  id: string | null = null;
  employeeObj: any = { name: '', salary: 0, gender: '', startDate: '', note: '', profilePic: '', department: '' };

  ngOnInit() {
    this.id = this.routes.snapshot.paramMap.get('id');
    if (this.id) {
      this.getEmpById();
    }
  }

  getEmpById() {
    this.http.get(`http://localhost:8080/emp/${this.id}`).subscribe({
      next: (data: any) => {
        this.employeeObj = data;
      },
      error: (err) => {
        console.error("Error fetching employee data:", err);
        alert('Failed to fetch employee details. Please try again.');
      }
    });
  }

  saveEmp() {
    if (this.id) {
      this.http.put(`http://localhost:8080/emp/${this.id}`, this.employeeObj, { responseType: 'text' }).subscribe({
        next: (response) => {
          console.log("Employee updated successfully:", response);
          alert(response); // ✅ Show success message
          this.homePage();
        },
        error: (err) => {
          if (err.status === 200 || err.status === 204) {
            console.warn("Received empty response but update was successful.");
            alert("Employee updated successfully!");
            this.homePage();
          } else {
            console.error("Error updating employee:", err);
            alert(`Failed to update employee: ${err.message || 'Unknown error'}`);
          }
        }
      });
    }
  }
    

  homePage() {
    this.route.navigate(['']);
  }
}
