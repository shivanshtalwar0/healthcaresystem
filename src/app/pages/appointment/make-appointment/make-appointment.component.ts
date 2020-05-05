import { Component, OnInit } from '@angular/core';
// import { AppointmentMessageComponent } from '../appointment-message/appointment-message.component';
import { Test } from 'src/app/test.model';
import { MatDialog } from '@angular/material/dialog';
import { AppointmenthandlerService } from 'src/app/services/appointmenthandler.service';
import { record } from 'src/app/interfaces/record.model';
import { AppointmentMessageComponent } from '../appointment-message/appointment-message.component';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {

  constructor(public dialog:MatDialog,private serv:AppointmenthandlerService){}
  test:Test[];
  status:boolean;
  btnStatus=false;
  tableStatus=false;
  currentCenterName="";
  currentTestName="";
  arrayDetails:record[];
  name:string;
  // diagnosticCenter=[{centerid:1,centername:"Dr. lal path",address:"Geeta colony",contact:"1234567891"},
  // {centerid:2,centername:"chuni lal",address:"Surjmal vihar",contact:"1456789780"},
  // {centerid:3,centername:"Paths labs",address:"vivek vihar",contact:"7564891230"},
  // {centerid:4,centername:"Gtb diagnosis center",address:"DilshadGarder",contact:"7565691230"}]
  diagnosticCenter=this.serv.diagnosticCenter;

  ngOnInit() {
    this.status=this.serv.getLogstatus();
  }

  // openDialog(){
  //   // console.log(event.value);
  //   this.dialog.open(LoginComponent);
  //   // this.status=this.serv.getLogstatus();

  // }
  // tests=[{id=1:[new Test(1,"Glucose"),new Test(2,"sugar test"),new Test(3,"sugar test"),new Test(4,"sugar test")]},
  // {2:[new Test(1,"Glucose"),new Test(2,"sugar test"),new Test(3,"sugar test"),new Test(4,"sugar test")]},
  // {3:[new Test(1,"Glucose"),new Test(2,"sugar test"),new Test(3,"sugar test"),new Test(4,"sugar test")]}]

onSelect(center:any){
   this.tableStatus=true;
   this.currentCenterName=center.centername;
   this.test=this.serv.onSelect(center.centerid);
}
onTestSelect(test:Test){
  this.currentTestName=test.testname;
    // this.serv.saveRecord(this.arrayDetails);

    this.btnStatus=true;
}
openDialog1(){
  const  dialogRef=this.dialog.open(AppointmentMessageComponent,{height:'400px',width:'600px',data: {}});

dialogRef.afterClosed().subscribe(result => {

  if(result===""){
    console.log(result);
  }else{
  this.serv.arrayDetails.push(this.serv.getDate?{date:this.serv.getDate(),Centername:this.currentCenterName,testName:this.currentTestName,
    patientid:Math.floor(Math.abs(Math.random() * 10000))}:null);
    this.arrayDetails=this.serv.arrayDetails;
  }
});
}




}
