import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';

const studentRoutes : Routes =  [
  {
    path: '',
    children: [
      {
        path: '',
        component: StudentListComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(studentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule { }
