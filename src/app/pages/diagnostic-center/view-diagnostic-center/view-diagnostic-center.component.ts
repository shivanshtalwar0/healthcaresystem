import { Component, OnInit } from '@angular/core';
import {DiagnosticCenter} from '../../../interfaces/diagnostic-center';
import {DiagnosticCenterService} from '../../../services/diagnostic-center.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-view-diagnostic-center',
  templateUrl: './view-diagnostic-center.component.html',
  styleUrls: ['./view-diagnostic-center.component.css']
})
export class ViewDiagnosticCenterComponent implements OnInit {

  centers:Array<DiagnosticCenter>=[];
  constructor(private diagnosticCenterService:DiagnosticCenterService) { }

  updateForm:FormGroup=new FormGroup({
    'centerName':new FormControl('',[Validators.required])
  });

  
  deleteCenter(centerId:number){
    this.diagnosticCenterService.deleteCenter(centerId)
  }
  save(center:DiagnosticCenter){
    this.diagnosticCenterService.updateCenter(center.centerId,this.updateForm.value.centerName)

  }
  updateCenter(centerId:number){
    let centerToBeUpdated=this.centers.find(value => value.centerId==centerId)
    
    this.updateForm.setValue({centerName:centerToBeUpdated.centerName})
    centerToBeUpdated.shouldUpdate=true;
  }

  ngOnInit(): void {
    this.centers=this.diagnosticCenterService.centers
  }

}
