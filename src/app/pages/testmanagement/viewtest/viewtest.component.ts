import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatetestComponent } from './updatetest/updatetest.component';
import { FormGroup } from '@angular/forms';
import { DeletetestComponent } from '../deletetest/deletetest.component';
import { Testmodel } from 'src/app/model/testmodel';
import { TestAttributes } from 'src/app/model/test-attributes';

@Component({
  selector: 'app-viewtest',
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.css']
})
export class ViewtestComponent implements OnInit {
  
 
  updateForm:FormGroup=new FormGroup({});

  
  
  constructor(private service:TestService , private dialog? : MatDialog) { }

  ngOnInit(): void {

   this.service.getTestList();
    
  }


  public get testList(){
    return this.service.testList;
  }


  
  updateTest(testId:number){

  
    const dialogRef = this.dialog.open(UpdatetestComponent,{
      data:{}
    });
    //dialogTitle: test, dialogText:i
    dialogRef.afterClosed().subscribe(result => {
   })
  }

  save(testId:string){

  }


  deleteTest(testId:string){

    const dialogRef = this.dialog.open(DeletetestComponent,{
      data : {}
    });
  
    dialogRef.afterClosed().subscribe(result => {
   })
  }
  }





