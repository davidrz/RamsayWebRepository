import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentListService } from './student-list.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewStudentComponent } from '../new-student/new-student.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [StudentListService]
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  constructor(private studentService: StudentListService, public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.getStudents();
  }
  
  getStudents(): void {
    this.studentService.getStudentList()
        .subscribe(
          (response: Student[]) => this.students = response
        ); 
  }

  newStudent(): void {
    const dialogRef = this.dialog.open(NewStudentComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

