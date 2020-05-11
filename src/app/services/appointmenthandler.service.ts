import { Injectable } from '@angular/core';
import { record } from '../interfaces/record.model';
import { Test } from '../test.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmenthandlerService {
  private logStaus:boolean;
  public arrayDetails:record[]=[];
  date: any;
  public mobj:{Centername:string,testName:string,patientid:number};

  public test1:Test[]=[new Test(1,"Glucose"),new Test(2,"Diabetics"),new Test(3,"Lung"),new Test(4,"Minor Freacture")];
  public test2:Test[]=[new Test(1,"HeartTest"),new Test(2,"Aesthemetic"),new Test(3,"Body "),new Test(4,"Full Body")];
  public test3:Test[]=[new Test(1,"EyeTest"),new Test(2,"Pancreas"),new Test(3,"Blood Cancer"),new Test(4,"CRPM")];
  public test4:Test[]=[new Test(1,"BloodTest"),new Test(2,"Brain Test"),new Test(3,"BP Test"),new Test(4,"Liver Diagnosis")];

  public diagnosticCenter=[{centerid:1,centername:"Dr. lal path",address:"Geeta colony",contact:"1234567891"},
  {centerid:2,centername:"chuni lal",address:"Surjmal vihar",contact:"1456789780"},
  {centerid:3,centername:"Paths labs",address:"vivek vihar",contact:"7564891230"},
  {centerid:4,centername:"Gtb diagnosis center",address:"DilshadGarder",contact:"7565691230"}];
  btnStaus: boolean;


  constructor() {
  }
  setLogStatus(logStaus:boolean){
    this.logStaus=logStaus;
  }
  getLogstatus():boolean{
    return this.logStaus;
  }
  setLogDATE(logDate:any){
    this.date=logDate;
  }
  getDate():any{
    return this.date;
  }
  onCancel(patientid: number) {
    let PatientToBeDeleted = this.arrayDetails.find(((value, index) => {
      return value.patientid === patientid;
    }));
    this.arrayDetails.splice(this.arrayDetails.indexOf(PatientToBeDeleted), 1);
  }

  onSelect(id:number):Test[]{
    if(id===1){
      return this.test1;
    }else if(id==2){
      return this.test1;
    }
    else if(id==3){
      return this.test3;
    }else{
      return this.test4;
    }
  }
  saveRecord(arrays:record[]){
    this.arrayDetails=arrays;
  }
}


