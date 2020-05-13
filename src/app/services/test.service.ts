import { Injectable } from '@angular/core';
import { Testmodel } from '../model/testmodel';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  baseUrl:string;
   private arrayTest:Array<Testmodel>=[];

  /* public testList1 : Testmodel [] = [new Testmodel("Blood Group",1)];
   public testList2 : Testmodel [] = [new Testmodel("Corona Virus",2)];
   public testList3 : Testmodel [] = [new Testmodel("Blood Pressure",3)];
   public testList4 : Testmodel [] = [new Testmodel("Sugar",4)];
   
   


   public diagnosticCenter=[
     {centerId:123 , centerName:"Dr. Lal Path", test:this.testList1},
     {centerId:1234 , centerName:"Xray labs", test:this.testList2},
     {centerId:12345 , centerName:"Pioneer lal", test:this.testList3},
   ]*/

  constructor(private http:HttpClient) {
    // this.baseUrl=`${environment.baseMwUrl}/testoperations`; //http://localhost:7700/testoperations
    this.baseUrl="http://localhost:7700/testoperations";
   }

    // addTest(test: Testmodel){
    //test.testId =this .testList.length + 1;
    //this.diagnosticCenter.push(test);
        //}
        addTest(testModel:Testmodel){
           this.http.post<Testmodel>(this.baseUrl+"/add",testModel).subscribe((data)=>{
             this.getTestList();
           });
         }
  
 /* removeTest(id:number){
    const test = this.diagnosticCenter.findIndex(c => c.centerId === id);
    this.diagnosticCenter.splice(test , 1);
  }*/

   deleteById(testId:string){
    this.http.delete<void>(`${this.baseUrl+"/delete"}/${testId}`).subscribe((data)=>{
      this.getTestList();
    });
  }

  getTestList(){
     this.http.get<Testmodel[]>(this.baseUrl+"/view").subscribe((data)=>
     {
       this.arrayTest=data;
     });  
}

    public get  testList(){
      return this.arrayTest;
    }

    

  /*getAllCenterDetails():Observable<any[]>
     {
      return this.http.get<any[]>("assets/diagnosticCenter.json");
      }
*/

  

  /*editTest(centerid:number,t:Testmodel){

        for(let i=0;i<this.diagnosticCenter.length;i++){
           if(this.diagnosticCenter[i].centerId==centerid){
               this.diagnosticCenter[i].test.push(t);

               }
           }
      }*/

}

