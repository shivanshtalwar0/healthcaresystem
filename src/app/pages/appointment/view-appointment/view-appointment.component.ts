import { Component, OnInit } from '@angular/core';
import { AppointmentMessageComponent } from '../appointment-message/appointment-message.component';
// import { Test } from 'src/app/test.model';
import { record } from 'src/app/interfaces/record.model';
import { MatDialog } from '@angular/material/dialog';
import { AppointmenthandlerService } from 'src/app/services/appointmenthandler.service';
import { CancelAppointmentComponent } from '../cancel-appointment/cancel-appointment.component';
// import { CancelAppointmentComponent } from '../../../cancel-appointment/cancel-appointment.component';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  constructor(private serv:AppointmenthandlerService,public dialog:MatDialog){}
  arrayDetails:record[];


  ngOnInit(): void {
    this.serv.getAppointments().subscribe((data)=>{

      this.serv.arrayDetails=data;
      this.arrayDetails=this.serv.arrayDetails;
    })

  }
  onCancelRecord(patientid:number){
    const dialogRef=this.dialog.open(CancelAppointmentComponent,{data:{PatientId:patientid}})

      dialogRef.afterClosed().subscribe(result=>{
        console.log("Succesfully deleted");
      })


    // this.buttonstatus=true;

  }

  }

