import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AppointmenthandlerService } from 'src/app/services/appointmenthandler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SuccessfulMessageComponent } from '../successful-message/successful-message.component';



@Component({
  selector: 'app-appointment-message',
  templateUrl: './appointment-message.component.html',
  styleUrls: ['./appointment-message.component.css']
})
export class AppointmentMessageComponent implements OnInit {
  today=new Date();
  //  date=this.today.getFullYear()+'/'+(this.today.getMonth()+1)+'/'+(this.today.getDate()+1);
   time=(this.today.getHours()>12&&this.today.getHours()<17)?"2:30P.M-4:30 P.M":"9:30A.M-12:00P.M";
   model:any;
   bValue=false;
   selectedDate:any;
   date:any;
   centerName:string;
   contactNo:any;
   constructor(public serv:AppointmenthandlerService, public dialogRef: MatDialogRef<AppointmentMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router:Router,private active:ActivatedRoute,public dialog:MatDialog) {
      this.contactNo=data.contactInfo;
      this.centerName=data.centerName;
     }

  value(data:any){
    this.serv.setLogDATE(data);
    const  dialogRef=this.dialog.open(SuccessfulMessageComponent,{width:'450px',data: {data,
      cName:this.centerName,cInfo:this.contactNo}});
    dialogRef.afterClosed().subscribe(result=>{console.log(result)});
    this.onNoClick();
    this.bValue=true;
    this.serv.btnStaus=this.bValue;
    this.router.navigate(["users","dashboard","viewappointment"],{relativeTo:this.active});

   }
  // selectedSlot="";

    ngOnInit(): void {
      }
      onNoClick(): void {
        this.dialogRef.close();
      }




}
