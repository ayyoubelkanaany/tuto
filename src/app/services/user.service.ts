import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      console.log(data);
    });
  }
}
