import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestService } from 'src/app/services/test.service';
import { Testmodel } from 'src/app/model/testmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-test',
  templateUrl: './insert-test.component.html',
  styleUrls: ['./insert-test.component.css']
})
export class InsertTestComponent implements OnInit {

     //model:Testmodel;

     dialogId:number;

     success:boolean=false;

  public addTestDetails : FormGroup;

 
  constructor(private router: Router,private formbuilder: FormBuilder,
    private dialogRef: MatDialogRef<InsertTestComponent>,
    private myservice:TestService
    ,@Inject(MAT_DIALOG_DATA)public data:any) { 
     // this.model=new Testmodel();
    }

  ngOnInit(): void {
    this.addTestDetails=this.formbuilder.group({
      testName : ['',[Validators.required]],
    });

    this.dialogId = this.data.dialogid; 
  } 

  onNoClick() : void{
    this.dialogRef.close();
  }

 /* onSubmit(){
    this.myservice.addTest(this.addTestDetails.value);
    this.dialogRef.close();
  }*/

     /* goToView(tname:string,tId:number)
         { 
            this.myservice.editTest(this.dialogId,new Testmodel(tname,tId)) ;
            console.log("Addition leads to pushing data in array..."); 
           // this.router.navigate(['view']);
           this.dialogRef.close(); 
             
          }*/

          goToView(tname:string)
          {
            console.log("Add service method is called and close the tab")
          // this.model.centerId=this.dialogId;
          //  this.model.testId=tId;
           // this.model.testName=tname;
           // let orb=this.myservice.addTest(this.model);
           // orb.subscribe((data) => {
              this.success=true;
              this.dialogRef.close(); 
             // setTimeout(()=>this.success=false,3000);
           // })
          } 
}
