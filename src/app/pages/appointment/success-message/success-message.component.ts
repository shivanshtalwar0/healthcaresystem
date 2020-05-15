import { Component, OnInit, Inject } from '@angular/core';
import { AppointmenthandlerService } from 'src/app/services/appointmenthandler.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {

  constructor(public serv:AppointmenthandlerService, public dialogRef: MatDialogRef<SuccessMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router:Router,private active:ActivatedRoute) { }


    onSuccess(){
      this.router.navigate(["users/dashboard/viewappointment"]);
      this.onNoClick();
    }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
