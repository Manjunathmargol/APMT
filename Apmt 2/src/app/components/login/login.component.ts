import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  flagsCheck = false;
  message = "";
  constructor(private formBuilder :FormBuilder , private router: Router,) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
   });
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
      
    }
    
  }

  checkLogin(): void{
    console.log(this.loginForm.controls['username'].value)
   if(this.loginForm.controls['username'].value ==="sagar" && this.loginForm.controls['password'].value ==="123456"){
     this.message ="login success"
    alert(this.message)
     this.router.navigate(['/uploader']);
   }else{
     console.log(this.message)
     this.message ="Username or password is incorrect";
      console.log(this.message)
   }

 }

}
