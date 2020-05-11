import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';
import { DiagnosticCenterService } from 'src/app/services/diagnostic-center.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Testmodel } from 'src/app/model/testmodel';

@Component({
  selector: 'app-remove-test',
  templateUrl: './remove-test.component.html',
  styleUrls: ['./remove-test.component.css']
})
export class RemoveTestComponent implements OnInit {


  toppings = new FormControl();

  tName:string='';
  tId:number;
  //testList:Array<Testmodel>;

  dialogId:number;


  constructor(private service : TestService,@Inject(MAT_DIALOG_DATA)public data:any,
  private dialogRef: MatDialogRef<RemoveTestComponent>,
  private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dialogId = this.data.dialogid;
  }

 
  

  
 //console.log("Remove part is working and it is returning center id");
 // const  test1= this.service.getAllTest().find (c => c.centerId === this.dialogId);
  //let someUsers = this.service.diagnosticCenter.filter(item => item.centerId == this.dialogId);
  //this.testList=test1.test;
 // console.log(this.testList);
  




    close()
      {
       // this.service.deleteById(123);
        //we will call delete method
  //this.dialogRef.close(); 
    }
}
