import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
import { ReturnStatement } from '@angular/compiler';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private x1:FetchdataService){}

  public record:any;

 ngOnInit() {
   console.log('fetch node js data');
   
   this.x1.apiFromnodejs().subscribe((result)=>{
    console.log(result);
    this.record = result;
   });
 }
}