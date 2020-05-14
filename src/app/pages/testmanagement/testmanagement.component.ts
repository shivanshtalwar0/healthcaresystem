import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { DeletetestComponent } from './deletetest/deletetest.component';
import { InputtestComponent } from './newtest/inputtest.component';

@Component({
  selector: 'app-testmanagement',
  templateUrl: './testmanagement.component.html',
  styleUrls: ['./testmanagement.component.css']
})
export class TestmanagementComponent implements OnInit {
  public get addIcon(){
    return faCoffee;
  }

  constructor(private dialog? : MatDialog ) { }

  ngOnInit(): void {
  }

  goToAdd()
  {
    const dialogRef = this.dialog.open(InputtestComponent,{
      data : {},
      height:'30em'
    });

    dialogRef.afterClosed().subscribe(result => {
   })
  }


}

