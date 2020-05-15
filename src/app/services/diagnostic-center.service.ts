import {Injectable} from '@angular/core';
import {DiagnosticCenter} from '../model/DiagnosticCenter';
import {HttpClient} from '@angular/common/http';
import {map, mapTo, pluck, toArray} from 'rxjs/operators';
import {BehaviorSubject, observable, Observable, of, Subscription} from 'rxjs';
import {TokenStorageService} from './token-storage.service';
import {TestModel} from '../model/testmodel';
import {SubjectSubscription} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticCenterService {

  constructor(private http: HttpClient,private tokenStorageService:TokenStorageService) {
  }

  baseUrl='diagnostic-service/diagnosticCenter'

  centers:DiagnosticCenter[] = [];

  updateCenter(centerId: number, center:DiagnosticCenter) {
    return this.http.put(this.baseUrl+'/'+centerId, center, this.tokenStorageService.httpOption)
  }

  getCenter() {
    this.http.get(this.baseUrl).subscribe((value:any) => {
       this.centers=value.map((val)=>({centerId:val.id,centerName:val.centerName,
         address:val.address,
         contactNo:val.contactNo,
         shouldUpdate:false}))
  });
  }

  getTestList(center:DiagnosticCenter,index):Observable<any>{
     return of(this.http.get<TestModel[]>(this.baseUrl+`/${center.centerId.toString()}/test`).subscribe((val)=>{
       center.testList=val
       this.centers[index]=center
     }));

  }
  addTestToCenter(centerId:number,testId:number):Observable<any>{
    return this.http.post(this.baseUrl+`/${centerId}/test/${testId}`,{})
  }

  addCenter(data) {
    return this.http.post(this.baseUrl, data)
  }

  deleteCenter(centerId: number) {
    return this.http.delete(this.baseUrl+"/"+centerId)
  }

}
