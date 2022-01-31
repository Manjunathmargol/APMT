import { Component, Input, OnInit } from '@angular/core';
import  *  as  projects  from  '../../project.json';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  @Input()
  childMessage!: [];
  projects: any = (projects as any).default;
  
  
  constructor( private router: Router) { }


  ngOnInit(): void {
    console.log(this.projects)
  }

}
