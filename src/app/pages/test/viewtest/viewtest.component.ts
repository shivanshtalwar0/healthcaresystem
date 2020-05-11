import { Component, OnInit } from '@angular/core';
//import { DiagnosticCenterService } from 'src/app/services/diagnostic-center.service';
import { Testmodel } from 'src/app/model/testmodel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InsertTestComponent } from '../insert-test/insert-test.component';
import { TestService } from 'src/app/services/test.service';
import { DiagnosticCenterService } from 'src/app/services/diagnostic-center.service';
import { RemoveTestComponent } from '../remove-test/remove-test.component';

@Component({
  selector: 'app-viewtest',
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.css']
})
export class ViewtestComponent implements OnInit {

  respectiveCenterId:number;
  center:any=[];
  detail:any=[];
  arrLeng:number;
  
  

  constructor(private myservice : DiagnosticCenterService,private route :ActivatedRoute,private serv : TestService,
    private router : Router,private dialog? : MatDialog 
    ) {}

    

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id=parseInt(params.get('centerName'));
      this.respectiveCenterId=id;
    }) 
    
      
   // this.loadCenterDetails();
  }

  /*loadCenterDetails(){
    this.serv.getAllCenterDetails().subscribe((data)=>{
    
     this.center=data;
     this.arrLeng=this.center.length;
     for(let i=0;i<this.arrLeng;i++){
      if(this.center[i].centerId===this.respectiveCenterId){
        this. detail.push(this.center[i]);
      }
            
    }
    });
       
     
     }

  /*get fetchCentersDetails(){
    console.log("view only chosen center"+this.respectiveCenterId);
    let someUsers = this.myservice.centers.filter(item => item.centerId == this.respectiveCenterId);
    console.log("check return is working or not"+ someUsers);
    return someUsers;
  
  }*/



  onAdd(j:number){
    
    console.log("Now fill the pop form and press submit ");
    
   // this.router.navigate(['insert']);
   //const  test1= this.serv.getAllTest().find (c => c.centerId === j); 
   const dialogRef = this.dialog.open(InsertTestComponent,{
     data : {dialogid:this.respectiveCenterId}
   });

   dialogRef.afterClosed().subscribe(result => {
  })
  }




  onDelete(j:number){
    
   /* console.log("delete tab is working");
    const  test1= this.serv.getAllTest().find (c => c.centerId === j); 
    const dialogRef = this.dialog.open(RemoveTestComponent,{
      data : {dialogid:test1.centerId}
    });
 
    dialogRef.afterClosed().subscribe(result => {
   });

  //  this.router.navigate(['remove']);*/

  console.log("now goint to delete pop up");
  const dialogRef = this.dialog.open(RemoveTestComponent,{
    data : {dialogid:this.respectiveCenterId}
  });

  dialogRef.afterClosed().subscribe(result => {
 })
  }

}
