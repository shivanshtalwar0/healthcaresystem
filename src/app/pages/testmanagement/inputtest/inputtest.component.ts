import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Testmodel } from 'src/app/model/testmodel';
import { TestService } from 'src/app/services/test.service';
import { TestAttributes } from 'src/app/model/test-attributes';

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


  testAdditionFormControl = new FormControl('', [
    Validators.required,
    
  ]);

  model:Testmodel;
  //attributes:Array<TestAttributes>=[];
  //id:number;
  attributes=[];
  len:number;
  testName:string;
  matcher = new MyErrorStateMatcher();
  constructor(private service:TestService,private dialogRef: MatDialogRef<InputtestComponent>,@Inject(MAT_DIALOG_DATA)public data:any) {
    this.model=new Testmodel();
    
   }

  ngOnInit(): void {
  }

  addAttribute(){
    this.attributes.push({value:""});
      //id: Math.abs(Math.random()*10000),
      //testAttributeName:   
  }

  goToAddTest(){
    //console.log(this.testName);
   // console.log(this.attributes);
   this.len=this.attributes.length;
    this.model.testId= Math.abs(Math.random()*10000);
    
    this.model.testName=this.testName;


    for(let i=0;i<this.len;i++){
      let testAttribute=new TestAttributes();
      testAttribute.id=Math.abs(Math.random()*10000);
      testAttribute.testAttributeName=this.attributes[i].value;
      //console.log(this.len);
      this.model.testAttributes.push(testAttribute); 
    }
    console.log(this.model);
    let orb=this.service.addTest(this.model);
    orb.subscribe((data) => {
    
    this.dialogRef.close(); })
    
  }

}
