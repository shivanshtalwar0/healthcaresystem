import { Component, OnInit } from '@angular/core';
import {DiagnosticCenter} from '../../../model/DiagnosticCenter';
import {DiagnosticCenterService} from '../../../services/diagnostic-center.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddDiagnosticCenterComponent} from '../add-diagnostic-center/add-diagnostic-center.component';
import {MatDialog} from '@angular/material/dialog';
import {MangeTestComponent} from '../mange-test/mange-test.component';
import {TestModel} from '../../../model/testmodel';

@Component({
  selector: 'app-view-diagnostic-center',
  templateUrl: './view-diagnostic-center.component.html',
  styleUrls: ['./view-diagnostic-center.component.css']
})
export class ViewDiagnosticCenterComponent implements OnInit {

  get centers(){
   return  this.diagnosticCenterService.centers;
  }
  constructor(public dialog: MatDialog,private diagnosticCenterService:DiagnosticCenterService) { }

  openTestMangement(center:DiagnosticCenter,index){
      this.diagnosticCenterService.getTestList(center,index).subscribe((value => {
        // center.testList=value
        // this.diagnosticCenterService.centers[index]=center
        const dialogRef = this.dialog.open(MangeTestComponent, {
          width: '250px',
          data: {index}
        });
      }));

  }


  updateForm:FormGroup=new FormGroup({
    'centerName':new FormControl('',[Validators.required]),
    'address':new FormControl('',[Validators.required]),
    'contactNo':new FormControl('',[Validators.required,
      Validators.pattern(/^[0-9]+$/)
    ])
  });


  deleteCenter(centerId:number){
    this.diagnosticCenterService.deleteCenter(centerId).subscribe((value:any)=>{
      if(value.success){
        this.diagnosticCenterService.getCenter();
        alert("deleted")
      }
      else {
        alert(value.error)
      }
    })
  }
  save(center:DiagnosticCenter){
    this.diagnosticCenterService.updateCenter(center.centerId,this.updateForm.value).subscribe((value:any)=>{
      if(value.success){
        alert("updated")
        this.diagnosticCenterService.getCenter();
      }
      else {
        alert(value.error)
      }
    })

  }
  updateCenter(centerId:number){
    this.centers.forEach(value => {
      if(value.centerId!=centerId){
        value.shouldUpdate=false
      }
    })
    let centerToBeUpdated=this.centers.find(value => value.centerId==centerId)
    this.updateForm.setValue({centerName:centerToBeUpdated.centerName,address:centerToBeUpdated.address,contactNo:centerToBeUpdated.contactNo})
    centerToBeUpdated.shouldUpdate=true;
  }

  ngOnInit(): void {
    this.diagnosticCenterService.getCenter();
    // this.centers=this.diagnosticCenterService.centers
  }

}
