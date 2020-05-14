import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(public dialog:MatDialog,private route:Router) { }

  ngOnInit(): void {
  }
  onClick(){

         this.route.navigate(['users/']);
  //   dialogRef.afterClosed().subscribe(result => {
  //  console.log(result); });
 }
 
}
