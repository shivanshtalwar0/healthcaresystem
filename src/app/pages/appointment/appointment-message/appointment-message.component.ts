import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AppointmenthandlerService } from 'src/app/services/appointmenthandler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SuccessMessageComponent } from '../success-message/success-message.component';



@Component({
  selector: 'app-appointment-message',
  templateUrl: './appointment-message.component.html',
  styleUrls: ['./appointment-message.component.css']
})
export class AppointmentMessageComponent implements OnInit {
  today=new Date();
   model:any;
   bValue=false;
   selectedDate:any;
   centerName:string;
   contactInfo:any;
   date:any;
   constructor(public serv:AppointmenthandlerService, public dialogRef: MatDialogRef<AppointmentMessageComponent>,public dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,private router:Router,private active:ActivatedRoute) {
      this.centerName=data.centerName;
      this.contactInfo=data.contactInfo;



    }

  value(data:any){
    this.serv.setLogDATE(data);
    const  dialogRef=this.dialog.open(SuccessMessageComponent,{data: {data
    ,cName:this.centerName,cInfo:this.contactInfo
    }});
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result);
    })
    this.onNoClick();
    this.bValue=true;
    this.serv.btnStaus=this.bValue;
   }
  // selectedSlot="";

    ngOnInit(): void {
      }
      onNoClick(): void {
        this.dialogRef.close();
      }




}
