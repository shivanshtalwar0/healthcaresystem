import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DeletetestComponent } from './deletetest/deletetest.component';
import { InputtestComponent } from './inputtest/inputtest.component';

@Component({
  selector: 'app-testmanagement',
  templateUrl: './testmanagement.component.html',
  styleUrls: ['./testmanagement.component.css']
})
export class TestmanagementComponent implements OnInit {

  constructor(private dialog? : MatDialog ) { }

  ngOnInit(): void {
  }

  goToAdd()
  {
    const dialogRef = this.dialog.open(InputtestComponent,{
      data : {}
    });
 
    dialogRef.afterClosed().subscribe(result => {
   })
  }

goToDelete(){
  const dialogRef = this.dialog.open(DeletetestComponent,{
    data : {}
  });

  dialogRef.afterClosed().subscribe(result => {
 })
}



}

