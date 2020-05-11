import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiagnosticCenterService} from '../../../services/diagnostic-center.service';

@Component({
  selector: 'app-add-diagnostic-center',
  templateUrl: './add-diagnostic-center.component.html',
  styleUrls: ['./add-diagnostic-center.component.css']
})
export class AddDiagnosticCenterComponent implements OnInit {

  addCenterForm:FormGroup=new FormGroup({
    'centerName':new FormControl('',[Validators.required])
  });
  
  addCenter(){
    this.diagnosticCenterService.addCenter(this.addCenterForm.value.centerName)
    this.addCenterForm.reset()
    this.onNoClick();
  }
  constructor(
    private diagnosticCenterService:DiagnosticCenterService,
    public dialogRef: MatDialogRef<AddDiagnosticCenterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}