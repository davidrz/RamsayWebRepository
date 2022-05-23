import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentListService } from './student-list.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [StudentListService]
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  headers = ["ID", "User Name", "First Name", "Last Name", "Age", "Career"];
  
  constructor(private studentService: StudentListService) { 
    
  }

  ngOnInit(): void {
    this.getStudents();
  }
  
  getStudents(): void {
    this.studentService.getStudentList()
        .subscribe(
          response => this.students = response
        ); 
  }

}
