import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from '../studentdetails.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  students: any = [];
  term: string = "";
  column: string = "";
  order: string = "asc";
  limit: number = 10;
  page: number = 1;

  constructor(private studentService: StudentdetailsService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  // Load all students
  loadStudents() {
    this.studentService.getStudents().subscribe(
      (data: any) => {
        this.students = data;
      },
      (error: any) => {
        alert('Internal Server Error');
      }
    );
  }

  // Delete student
  deleteStudent(id: string) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(
        () => {
          alert("Deleted successfully!");
          this.loadStudents();
        },
        () => {
          alert("Internal Server Error");
        }
      );
    }
  }

  // Filter students
  filterStudents() {
    if (this.term.trim() === "") {
      this.loadStudents();
      return;
    }
    this.studentService.filterStudent(this.term).subscribe(
      (data: any) => {
        this.students = data;
      },
      () => {
        alert("Internal Server Error");
      }
    );
  }

  // Sort students
  sortStudents() {
    this.studentService.sortStudent(this.column, this.order).subscribe(
      (data: any) => {
        this.students = data;
      },
      () => {
        alert("Internal Server Error");
      }
    );
  }

  // Paginate students
  paginateStudents() {
    this.studentService.paginateStudent(this.limit, this.page).subscribe(
      (data: any) => {
        this.students = data;
      },
      () => {
        alert("Internal Server Error");
      }
    );
  }
}
