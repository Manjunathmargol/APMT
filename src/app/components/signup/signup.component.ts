import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MustMatch } from './passwordMatch';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
<<<<<<< HEAD
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,) { }
=======
    submitted = false;

  constructor(private formBuilder: FormBuilder , private router: Router,) { }
>>>>>>> a67e40f (about component added)


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
<<<<<<< HEAD

=======
     
>>>>>>> a67e40f (about component added)
      username: ['', Validators.required],
      // lastName: ['', Validators.required],
      // validates date format yyyy-mm-dd
      // dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      // acceptTerms: [false, Validators.requiredTrue]
<<<<<<< HEAD
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
=======
  }, {
       validator: MustMatch('password', 'confirmPassword')
  });
>>>>>>> a67e40f (about component added)
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
<<<<<<< HEAD
      return;
=======
        return;
>>>>>>> a67e40f (about component added)
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
<<<<<<< HEAD
  }
  gender = null;
  onSave() {


  }

=======
}


>>>>>>> a67e40f (about component added)

}
