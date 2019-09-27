import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from  './user'



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private employeeUrl = 'api/employee';

  constructor(private http: HttpClient) { }

  getEmployee (): Observable<User[]> {
    return this.http.get<User[]>(this.employeeUrl)
  }
}
