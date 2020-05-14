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
  loading = false;
  returnUrl: string;
  form: any = {};
  errorMessage = '';
  roles: string[] = [];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      logEmail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      logPassword: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*[$@$!%*?&])(?=.*?[a-z])(?=.*?[0-9]).{8,14}$')]],
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
        //this.tokenStorage.saveUser(data);
        this.tokenStorage.saveRoles(data.rolesList);
        this.tokenStorage.setAuthenticated();
        //this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
        this.redirectTo();
      },
        err => {
          this.errorMessage = err.error.message;
        }
      );
  }
  // reloadPage() {
  //   window.location.reload();
  // }
  redirectTo(){
    if(this.tokenStorage.isLoggedIn)
    {
      if(this.tokenStorage.getRoles.includes('ADMIN')){
        this.router.navigate(['admin/diagnostic-center']);
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





