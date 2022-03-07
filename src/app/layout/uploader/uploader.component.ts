import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService} from '../../common.service'
import  *  as  projects  from  '../../project.json';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  projects: any = (projects as any).default;

  projectsForm!:FormGroup;

  constructor(private formBuilder: FormBuilder ,private CommonService: CommonService) { }

  

  ngOnInit(): void {
    this.projectsForm = this.formBuilder.group({
     
      name: ['',],
      discription: ['',],
      price: ['',],
      module: ['',],
      imageUrl: ['',],
      vedioUrl: ['',],
      tech: ['',],
      synopsis: ['',]
     
    });
   
  console.log(this.projects)
  }

  add(){
    var data = this.projectsForm.value;
    console.log(this.projectsForm.value)
    this.projects.push(data);

    console.log(this.projects);

    // if(this.studentForm.valid){
    //   this.studentService.studentList.push(this.studentForm.value);
    //   this.resetForm();
    //   console.log('this.studentService.studelost',this.studentService.getStudents())}
    //   else {
    //   this.msg = 'Please complete form'
    // }
  }

}
