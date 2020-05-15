import { Component, OnInit } from '@angular/core';
// import { AppointmentMessageComponent } from '../appointment-message/appointment-message.component';
// import { Test } from 'src/app/test.model';
import { MatDialog } from '@angular/material/dialog';
import { AppointmenthandlerService } from 'src/app/services/appointmenthandler.service';
import { record } from 'src/app/interfaces/record.model';
import { AppointmentMessageComponent } from '../appointment-message/appointment-message.component';
import { DiagnosticCenter } from 'src/app/interfaces/diagnosticenter.model';
import { Test } from 'src/app/interfaces/test.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {

  constructor(public dialog:MatDialog,private serv:AppointmenthandlerService,
    private tokenStorage:TokenStorageService){}
  test:Test[];
  status:boolean;
  btnStatus=false;
  tableStatus=false;
  centerId:number;
  testId:number;
  currentTestName="";

  name:string;
  recordModel:record;

  date:any;
  // btnStatus=false;
  // tableStatus=false;
  buttonstatus=false;
  currentCenterName:string;
  // currentTestName="";
  arrayofDetails:record[];
  arrayDetails:DiagnosticCenter[];
  arrayDetails1:any=new Map();
  contactNo:any;
  centerList:DiagnosticCenter;
  diagnosticCenter=this.serv.diagnosticCenter;

  ngOnInit() {
    this.load();
  }

  load() {
    this.serv.getAll().subscribe((data)=>{this.arrayDetails=data});
    this.serv.diagnosticCenter=this.arrayDetails;
  }

onSelect(center:any){
   this.tableStatus=true;
   this.contactNo=center.contactNo;
   this.currentCenterName=center.centerName;
   this.serv.getTestList(center).subscribe((data)=>{
    this.test=data;
   })
   this.centerId=center.id;


}
onTestSelect(test:Test){
  this.currentTestName=test.testName;
    // this.serv.saveRecord(this.arrayDetails);
    this.testId=test.testId;
    this.btnStatus=true;
}
openDialog1(){
  const  dialogRef=this.dialog.open(AppointmentMessageComponent,{height:'400px',width:'600px',data: {
    centerName:this.currentCenterName,contactInfo:this.contactNo
  }});

dialogRef.afterClosed().subscribe(result => {

  if(result===""){
    console.log(result);
  }else{
    this.recordModel={date:this.serv.getDate(),centername:this.currentCenterName,testName:this.currentTestName,
      patientid:Math.floor(Math.abs(Math.random() * 10000)),centerId:this.centerId,testId:this.testId};
      this.serv.add(this.recordModel).subscribe((data)=>{
        this.serv.arrayDetails.push(this.recordModel);
      })

      this.arrayofDetails=this.serv.arrayDetails}
});
}




}
