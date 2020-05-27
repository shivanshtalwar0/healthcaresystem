import {Component, Inject, OnInit} from '@angular/core';
import {TestService} from '../../../services/test.service';
import {DiagnosticCenterService} from '../../../services/diagnostic-center.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TestModel} from '../../../model/testmodel';
import {TestAttributes} from '../../../model/test-attributes';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

  updateTestForm: FormGroup=new FormGroup({
    "testName":new FormControl(this.data.testModel.testName,[Validators.required])

  });

  constructor(public formBuilder: FormBuilder, public testService: TestService, private diagnosticCenterService: DiagnosticCenterService,
              public dialogRef: MatDialogRef<UpdateTestComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { testModel: TestModel }) {
  }

  addAttribute(state = '') {
    this.updateTestForm.addControl("attribute"+Object.keys(this.updateTestForm.controls).length+1,new FormControl("", [Validators.required]))
  }
  removeAttribute(key){
    delete this.updateTestForm.controls[key];
  }

  ngOnInit(): void {
    console.log(this.data.testModel);
    this.data.testModel.testAttributes.forEach(((value, index) => {
      let formControl:FormControl=new FormControl("",[Validators.required]);
      formControl.setValue(value.testAttributeName);
      this.updateTestForm.setControl("attribute"+index.toString(),formControl)
    }))

  }
 public get arrayAttributes(){
    return this.updateTestForm.controls;
  }

  updateTest() {
    let testAttributes:TestAttributes[]=[]
    Object.keys(this.updateTestForm.controls).forEach((key,index)=>{
      if(index!=0){
        testAttributes.push(new TestAttributes(this.updateTestForm.value[key],null))
      }

    })
    let testModel:TestModel=new TestModel(this.data.testModel.testId,this.updateTestForm.value.testName,testAttributes,false)
    this.testService.updateTest(testModel)
    this.dialogRef.close()

  }

}
