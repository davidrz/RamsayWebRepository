import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRoutingModule } from './student-routing.module';
import { NewStudentComponent } from './new-student/new-student.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentListComponent,
    NewStudentComponent
  ],
  entryComponents:[NewStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    MatDialogModule
  ]
})
export class StudentModule { }
