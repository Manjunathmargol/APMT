import { Component, OnInit } from '@angular/core';
import  *  as  projects  from  '../project.json';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  projects: any = (projects as any).default;
  constructor() { }
  

  ngOnInit(): void {
  }

}
