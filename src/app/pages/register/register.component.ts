import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;
  errors=null;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      regEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      frName: ['', [Validators.required, Validators.pattern('^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$'), Validators.maxLength(15)]],
      lsName: ['', [Validators.required, Validators.pattern('^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$'), Validators.maxLength(15)]],
      ctNumber: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      regPassword: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*[$@$!%*?&])(?=.*?[a-z])(?=.*?[0-9]).{8,14}$')]],
      confPassword: ['', Validators.required]
    },
      {
        validator: this.customValidator.MatchPassword('regPassword', 'confPassword'),
      }
    );
  }


  get registerFormControl() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted=true;
    this.authenticationService.register(
      this.registerForm.value.regEmail,
      this.registerForm.value.frName,
      this.registerForm.value.lsName,
      this.registerForm.value.ctNumber,
      this.registerForm.value.regPassword
    ).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('/login');
      },
      err => {
	      this.errors=err;
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onReset() {
    this.registerForm.reset();
  }
}

