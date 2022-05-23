import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddStudent } from '../models/AddStudent';

@Injectable({
  providedIn: 'root'
})
export class NewStudentService {

  constructor(private http: HttpClient) { 

  }

  saveStudent(data: any): Observable<Response>{
    data.id = undefined;
    return this.http.post(`${environment.urlService}/Student/CreateStudent`, data)
    .pipe(
      map((response: any) => response)
    )
  }
}
