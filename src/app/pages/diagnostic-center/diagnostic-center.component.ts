import {Component, OnInit} from '@angular/core';
import {AddDiagnosticCenterComponent} from './add-diagnostic-center/add-diagnostic-center.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';






@Component({
  selector: 'app-diagnostic-center',
  templateUrl: './diagnostic-center.component.html',
  styleUrls: ['./diagnostic-center.component.css']
})
export class DiagnosticCenterComponent implements OnInit {

  constructor(public dialog: MatDialog,private router:Router) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDiagnosticCenterComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  goToAddTest(){
    this.router.navigate['/addtest'];
  }

  goToDeleteTest(){
    this.router.navigate['/deletetest'];
  }


  ngOnInit(): void {
  }

}
