import { Component, OnInit, Inject } from '@angular/core';
import { AppointmenthandlerService } from 'src/app/services/appointmenthandler.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-successful-message',
  templateUrl: './successful-message.component.html',
  styleUrls: ['./successful-message.component.css']
})
export class SuccessfulMessageComponent implements OnInit {
   date:string;

  constructor(public serv:AppointmenthandlerService, public dialogRef: MatDialogRef<SuccessfulMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router:Router,private active:ActivatedRoute) {
    }
    onSuccess(){
      this.router.navigate(['users/dashboard/viewappointment']);
      this.onNoClick();}
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
