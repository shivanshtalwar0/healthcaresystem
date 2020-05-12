import { Component, OnInit, Inject } from '@angular/core';
import { AppointmenthandlerService } from 'src/app/services/appointmenthandler.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-appointment',
  templateUrl: './cancel-appointment.component.html',
  styleUrls: ['./cancel-appointment.component.css']
})
export class CancelAppointmentComponent implements OnInit {

  constructor(public serv:AppointmenthandlerService, public route:Router,public dialogRef: MatDialogRef<CancelAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
      }
      onNoClick(): void {
        this.dialogRef.close();
      }
      onDelete(patientid){
        this.serv.deleteById(patientid).subscribe(()=>{
          this.serv.onCancel(patientid);
        })
      }


}
