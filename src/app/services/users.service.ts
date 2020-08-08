import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { HttpClient, HttpParams }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private httpClient:HttpClient) { }

  //  user API service calling function 

  getUserdetails(): Observable<any>{
    
    return this.httpClient.get("https://api.github.com/users");

  }
}
