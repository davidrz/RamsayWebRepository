import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  constructor(private http:HttpClient) { 

  }

  getStudentList(): Observable<Student[]>{
    return this.http.get<Student[]>(`${environment.urlService}/Student/GetStudents`)
  }

  deleteStudent(data: number): Observable<any>{
    return this.http.delete<any>(`${environment.urlService}/Student/DeleteStudent/${data}`)
  }
}
