import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserHomeComponent } from '../user-home/user-home.component';
import { Role } from 'src/app/interfaces/role.enum';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  form: any = {};
  errorMessage = '';
  roles: string[] = [];	
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      logEmail: ['', [Validators.required]],
      logPassword: ['', [Validators.required]],
    });


    if (this.tokenStorage.getToken) {
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  onSubmit() {

    this.submitted = true;
    this.authenticationService.login(
      this.loginForm.value.logEmail,
      this.loginForm.value.logPassword)
      .subscribe((data) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveRoles(data.authorityList);
        this.tokenStorage.setAuthenticated();
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.redirectTo();
      },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
  }
  // reloadPage() {
  //   window.location.reload();
  // }
  redirectTo(){
    if(this.tokenStorage.isLoggedIn)
    {
      if(this.tokenStorage.getRoles.indexOf('ADMIN')>-1){
        this.router.navigate(['admin/dashboard']);
      }
      // if(this.tokenStorage.getRoles.includes('FACILITATOR')){
      //   this.router.navigate('/faciliatator')
      // }
      else{
      this.router.navigate(['/users']);
    }
    }
  }
  }





