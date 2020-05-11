import {Injectable} from '@angular/core';
import {DiagnosticCenter} from '../interfaces/diagnostic-center';
import {HttpClient} from '@angular/common/http';
import {map, mapTo, pluck, toArray} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticCenterService {

  constructor(private http: HttpClient) {
  }


  centers: Array<DiagnosticCenter> = [];

  updateCenter(centerId: number, center:DiagnosticCenter) {
    return this.http.put('http://localhost:8080/update/'+centerId, center, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  getCenter() {
    this.http.get('http://localhost:8080/list').subscribe((value:any) => {
      if(value.success){
       this.centers=value.data.map((val)=>({centerId:val.id,centerName:val.centerName,
         address:val.address,
         contactNo:val.contactNo,
         shouldUpdate:false}))
      }
  });
  }

  addCenter(data) {
    return this.http.post('http://localhost:8080/new', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  deleteCenter(centerId: number) {
    return this.http.delete('http://localhost:8080/delete/'+centerId, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

}
