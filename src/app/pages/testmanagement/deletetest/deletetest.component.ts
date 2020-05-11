import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl } from '@angular/forms';
import { Testmodel } from 'src/app/model/testmodel';

@Component({
  selector: 'app-deletetest',
  templateUrl: './deletetest.component.html',
  styleUrls: ['./deletetest.component.css']
})
export class DeletetestComponent implements OnInit {


  deleteTestFormControl = new FormControl();
 success:boolean=false;
  testid="";
  testList:Testmodel[]=[];


  constructor(private service : TestService,@Inject(MAT_DIALOG_DATA)public data:any,
  private dialogRef: MatDialogRef<DeletetestComponent>,
  private formbuilder: FormBuilder) { }



  ngOnInit(): void {
    this.getArrayOfTest();
  }


  getArrayOfTest(){
    this.service.getTestList().subscribe(
      (data) => { this.testList = data; }
    );
  }


  goToDelete(){
  
    let orb=this.service.deleteById(this.testid);
    orb.subscribe((data) => {
    this.success=true;
    console.log("Deleted");
      this.dialogRef.close(); })
      
  
  }

}
