import {Injectable} from '@angular/core';
import {DiagnosticCenter} from '../interfaces/diagnostic-center';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticCenterService {
  centers: Array<DiagnosticCenter> = [];
  updateCenter(centerId:number,centerName:string){
   for(let i=0;i<this.centers.length;i++){
     if(this.centers[i].centerId==centerId){
       this.centers[i].centerName=centerName
       this.centers[i].shouldUpdate=false

     }
   }

  }

  addCenter(centerName: string) {
    this.centers.push({
      centerName: centerName,
      centerId: Math.abs(Math.random() * 10000),
      shouldUpdate:false
    });
  }

  deleteCenter(centerId: number) {
    let centerToBeDeleted = this.centers.find(((value, index) => {
      return value.centerId === centerId;
    }));
    this.centers.splice(this.centers.indexOf(centerToBeDeleted), 1);
  }

  constructor() {
  }
}
