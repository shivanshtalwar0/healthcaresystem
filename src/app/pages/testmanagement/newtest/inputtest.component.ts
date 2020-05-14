import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Validators, FormControl, FormGroupDirective, NgForm, FormGroup, FormArray, AbstractControl} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {TestModel} from 'src/app/model/testmodel';
import {TestService} from 'src/app/services/test.service';
import {TestAttributes} from 'src/app/model/test-attributes';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-inputtest',
  templateUrl: './inputtest.component.html',
  styleUrls: ['./inputtest.component.css']
})
export class InputtestComponent implements OnInit {


  newTestForm = new FormGroup({
    'testName': new FormControl('', [Validators.required]),
    'testAttributes': new FormArray([])
  });

  constructor(private service: TestService, private dialogRef: MatDialogRef<InputtestComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  addAttribute() {
    this.newTestForm.get('testAttributes').value.push(new FormControl('', [Validators.required]));
  }

  goToAddTest() {
    let testAttributes: TestAttributes[] = [];
    this.newTestForm.value.testAttributes.forEach((control) => {
      testAttributes.push(new TestAttributes(control.value));
    });
    let testModel = new TestModel(null,this.newTestForm.value.testName, testAttributes,false);
    this.service.addTest(testModel);
    console.log(testModel);
    this.dialogRef.close();

  }

}
