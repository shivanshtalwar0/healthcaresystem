import { Component, OnInit } from '@angular/core';
import { AppointmentMessageComponent } from '../appointment-message/appointment-message.component';
import { Test } from 'src/app/test.model';
import { record } from 'src/app/interfaces/record.model';
import { MatDialog } from '@angular/material/dialog';
import { AppointmenthandlerService } from 'src/app/services/appointmenthandler.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  constructor(private serv:AppointmenthandlerService){}
  arrayDetails=this.serv.arrayDetails;
  ngOnInit(): void {

  }
  onCancelId(patientid: number){
    this.serv.onCancel(patientid);
  }

 }
