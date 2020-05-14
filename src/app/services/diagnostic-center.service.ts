import {Injectable} from '@angular/core';
import {DiagnosticCenter} from '../interfaces/diagnostic-center';
import {HttpClient} from '@angular/common/http';
import {map, mapTo, pluck, toArray} from 'rxjs/operators';
import {of} from 'rxjs';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticCenterService {

  constructor(private http: HttpClient,private tokenStorageService:TokenStorageService) {
  }

  baseUrl='diagnostic-service/diagnosticCenter'


  centers: Array<DiagnosticCenter> = [];

  updateCenter(centerId: number, center:DiagnosticCenter) {
    return this.http.put(this.baseUrl+'/'+centerId, center, this.tokenStorageService.httpOption)
  }

  getCenter() {
    this.http.get(this.baseUrl,this.tokenStorageService.httpOption).subscribe((value:any) => {
      if(value.success){
       this.centers=value.data.map((val)=>({centerId:val.id,centerName:val.centerName,
         address:val.address,
         contactNo:val.contactNo,
         shouldUpdate:false}))
      }
  });
  }

  addCenter(data) {
    return this.http.post(this.baseUrl, data, this.tokenStorageService.httpOption)
  }

  deleteCenter(centerId: number) {
    return this.http.delete(this.baseUrl+"/"+centerId, this.tokenStorageService.httpOption)
  }

}
