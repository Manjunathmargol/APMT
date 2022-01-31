import { Component, OnInit } from '@angular/core';
import  *  as  projects  from  '../../project.json';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any = (projects as any).default;
  parentMessage:any;

  constructor( private router: Router) { }

  ngOnInit(): void {
    console.log(this.projects);
  }

  getProject(project:any) {
   
    console.log(project)
    // console.log(this.projects)
    this.projects.forEach((element: any) => {
      console.log(element)
      if(project.id===element.id){
        this.router.navigate(['/project-details',{ id: project.id }]);
        console.log(element)
        this.parentMessage=element;
        
      }
      
    });
  
  } 

}
