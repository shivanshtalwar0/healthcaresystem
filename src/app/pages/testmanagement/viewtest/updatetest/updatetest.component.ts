import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';
import { TestModel } from 'src/app/model/testmodel';
import { TestAttributes } from 'src/app/model/test-attributes';
import { TestService } from 'src/app/services/test.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-updatetest',
  templateUrl: './updatetest.component.html',
  styleUrls: ['./updatetest.component.css']
})

export class UpdatetestComponent implements OnInit {

  testAdditionFormControl = new FormControl('', [
    Validators.required,

  ]);

  attributes=[];


  matcher = new MyErrorStateMatcher();


  constructor(private myservice:TestService,private service:TestModel,private myattributes:TestAttributes,
    private dialogRef: MatDialogRef<UpdatetestComponent>,@Inject(MAT_DIALOG_DATA)public data:any) { }

  ngOnInit(): void {

  }

  addAttribute(){
    this.attributes.push({value:""});

  }

  goToUpdateTest(){


    this.dialogRef.close();

  }


}
