import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private roles: string[];
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private router:Router,private tokenStorageService: TokenStorageService,public dialog:MatDialog) { }

  ngOnInit() {

    if (this.tokenStorageService.isLoggedIn) {
      // const user = this.tokenStorageService.getUser();
      // this.roles = user.roles;
      this.showAdminBoard = this.tokenStorageService.getRoles.includes('ADMIN');
      this.showModeratorBoard = this.tokenStorageService.getRoles.includes('FACILITATOR');
      // this.username = user.username;
    }
  }
  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(["users","login"])
  }
  onClickeView(){

      const dialogRef=this.dialog.open(LoginComponent);
      dialogRef.afterClosed().subscribe(result => {
     console.log(result); });
   }
public get isLoggedIn(){
    return this.tokenStorageService.isLoggedIn;
}

}
