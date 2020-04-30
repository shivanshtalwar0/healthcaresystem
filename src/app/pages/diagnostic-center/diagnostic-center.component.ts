import {Component, OnInit} from '@angular/core';
import {AddDiagnosticCenterComponent} from './add-diagnostic-center/add-diagnostic-center.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-diagnostic-center',
  templateUrl: './diagnostic-center.component.html',
  styleUrls: ['./diagnostic-center.component.css']
})
export class DiagnosticCenterComponent implements OnInit {

  constructor(public dialog: MatDialog) {
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


  ngOnInit(): void {
  }

}
