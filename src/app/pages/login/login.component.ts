import { Component, OnInit, Inject } from '@angular/core';
import { AppointmenthandlerService } from 'src/app/services/appointmenthandler.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserHomeComponent } from '../user-home/user-home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userName="sachin"
  private password=123456;
  submitted=false;
  logstatus:boolean;

  onSubmit(uName:string,password:any){
    password=parseInt(password);
    // this.submitted=true;
    if(this.userName===uName && this.password===password){
      this.logstatus=true;
      this.submitted=true;
    }else{
      this.logstatus=false;
      this.submitted=true;
      // this.serv.setLogStatus(this.logstatus);
      // console.log("Sorry"+uName+"not A valid membr")
          //  this.childData.emit("sorry!!!Invalid userid and name");

        }
        if(this.logstatus){
          this.router.navigate(["users/dashboard/makeappointment"]);
        }
    this.onNoClick();
}

  // @Output() public childData=new EventEmitter();
  // @Output() public data=new EventEmitter
  constructor(private serv:AppointmenthandlerService,public dialogRef: MatDialogRef<UserHomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router:Router) { }

    ngOnInit(): void {
      }
      onNoClick(): void {
        this.dialogRef.close();}

  }





