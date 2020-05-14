import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatetestComponent } from './updatetest/updatetest.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { DeletetestComponent } from '../deletetest/deletetest.component';
import { TestModel } from 'src/app/model/testmodel';
import { TestAttributes } from 'src/app/model/test-attributes';
import {UpdateTestComponent} from '../update-test/update-test.component';

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



  updateTest(testModel:TestModel){
    // this.service.toggleUpdate(testId);
    const dialogRef = this.dialog.open(UpdateTestComponent,{
      data:{testModel}
    });
    //dialogTitle: test, dialogText:i
    dialogRef.afterClosed().subscribe(result => {
   })
  }


  save(testId:TestModel){

  }


  deleteTest(testId:TestModel){

    this.service.deleteById(testId)
   //  const dialogRef = this.dialog.open(DeletetestComponent,{
   //    data : {}
   //  });
   //
   //  dialogRef.afterClosed().subscribe(result => {
   // })
  }
  }





