import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
constructor(private x1:FetchdataService){}

ngOnInit(): void {
  console.log('about component loaded');
}
}