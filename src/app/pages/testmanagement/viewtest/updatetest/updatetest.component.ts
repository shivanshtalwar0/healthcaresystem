import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';
import { Testmodel } from 'src/app/model/testmodel';
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

  // dialogTitle: Testmodel;
  // dialogText: number;
  // model:Testmodel;
  // updatedItem:number;
  // uTestId:number;
  // uTestName:string='';
  // pop:boolean=false;
  // uAttributes:TestAttributes[]=[];
  // utestAttributeId:number;
  // utestAttributeName:string;
  
  attributes=[];
  
  
  matcher = new MyErrorStateMatcher();


  constructor(private myservice:TestService,private service:Testmodel,private myattributes:TestAttributes,
    private dialogRef: MatDialogRef<UpdatetestComponent>,@Inject(MAT_DIALOG_DATA)public data:any) { }

  ngOnInit(): void {
    // this.dialogTitle = this.data.dialogTitle;
    // this.dialogText = this.data.dialogText;


    // this.updatedItem=this.dialogText;
    // this.uTestId=this.dialogTitle.testId;
    // this.uTestName=this.dialogTitle.testName;
    // this.uAttributes=this.dialogTitle.testAttributes;
    // for(let i=0;i<this.uAttributes.length;i++){
    //   this.utestAttributeId=this.uAttributes[i].id;
    //   this.utestAttributeName=this.uAttributes[i].testAttributeName;

    // }
  
  //  this.pop=true;
  }

  addAttribute(){
    this.attributes.push({value:""});
      
  }

  goToUpdateTest(){
  //  this.len=this.attributes.length;
  //   this.model.testId= Math.abs(Math.random()*10000);
    
  //   this.model.testName=this.testName;


  //   for(let i=0;i<this.len;i++){
  //     let testAttribute=new TestAttributes();
  //     testAttribute.id=Math.abs(Math.random()*10000);
  //     testAttribute.testAttributeName=this.attributes[i].value;
  //     //console.log(this.len);
  //     this.model.testAttributes.push(testAttribute); 
  //   }
  //  // console.log(this.model);
  //   this.myservice.addTest(this.model);
    
    this.dialogRef.close(); 
    
  }


}
