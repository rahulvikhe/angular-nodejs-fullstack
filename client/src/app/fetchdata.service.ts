import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {


  constructor(private http:HttpClient) {}

  apiFromnodejs(){
    console.log('function called');
    return this.http.get('http://localhost:8500/users');
  }
}