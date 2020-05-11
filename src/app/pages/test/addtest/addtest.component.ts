import { Component, OnInit } from '@angular/core';
//import { DiagnosticCenterService } from 'src/app/services/diagnostic-center.service';
import { TestBed } from '@angular/core/testing';
import { Testmodel } from 'src/app/model/testmodel';
import {Router}  from '@angular/router';


import {FormControl, FormGroup, Validators} from '@angular/forms';
import { TestService } from 'src/app/services/test.service';
import { DiagnosticCenterService } from 'src/app/services/diagnostic-center.service';


@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {
  
  cname:number;
 
  testName="";
  //center:any=[];
  
  
 // attributes=[]

 /* addAttribute(){
    this.attributes.push({value:""})
  
  }*/

  

  constructor(private serv : TestService, private router : Router){
   
  }
  
   
  ngOnInit(): void {
 // this.loadCenterDetails();
    
  }


    /* loadCenterDetails(){
      this.serv.getAllCenterDetails().subscribe((data)=>{this.center=data});
       
       }*/

  
  onsubmit(){  
console.log("Add component is working"+ this.cname+ "is the  center id . now go to view page");
     this.router.navigate(['view',this.cname]);
   
   
  }

 
  
}
