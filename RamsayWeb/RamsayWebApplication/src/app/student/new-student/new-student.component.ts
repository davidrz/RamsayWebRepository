import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddStudent } from '../models/AddStudent';
import { NewStudentService } from './new-student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss'],
  providers: [NewStudentService]
})
export class NewStudentComponent implements OnInit {

  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    career: new FormControl('')
  });

  student: AddStudent = new AddStudent;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private studentService: NewStudentService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        firstName: [
          '',
          [
            Validators.required,
            Validators.maxLength(20)
          ]
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.maxLength(20)
          ]
        ],
        age: [
          '',
          [
            Validators.required,
            Validators.pattern("^[0-9]*$")
          ]
        ],
        career: [
          '',
          [
            Validators.required, Validators.maxLength(20)
          ]
        ]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  saveStudent(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    let student = {
      "UserName": this.form.value.userName,
      "FirstName": this.form.value.firstName,
      "LastName": this.form.value.lastName,
      "Age": +this.form.value.age,
      "Career": this.form.value.career
    }

    this.studentService.saveStudent(student)
      .subscribe(response => {
        this.form.reset();
      })
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
