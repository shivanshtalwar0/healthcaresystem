import { Injectable ,AbstractType } from '@angular/core';
// import { record } from '../interfaces/record.model';
// import { Test } from '../test.model';

// import { Injectable, AbstractType } from '@angular/core';
// import { Test } from './test.model';
// import { record } from './record.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DiagnosticCenter } from '../interfaces/diagnosticenter.model';
import { record } from '../interfaces/record.model';
import { TokenStorageService } from './token-storage.service';
// import { DiagnosticCenter } from './diagnosticenter.model';


@Injectable({
  providedIn: 'root'
})
export class AppointmenthandlerService {
  public btnStaus:boolean;
  baseUrl:string;
  recordModel:record;
  public date:string;
  public arrayDetails:record[]=[];

    public diagnosticCenter:any[]=[];
<<<<<<< HEAD
  constructor(private http:HttpClient,private tokenStorageService:TokenStorageService) {
    this.baseUrl=`${environment.baseMwUrl}/appointment-service/appointments`;
=======
  constructor(private http:HttpClient) {
    this.baseUrl=`appointment-service/appointments`;
>>>>>>> 7e5f345790911198835c6aaaa6c6a17d039f8021
  }

  getAll():Observable<DiagnosticCenter[]>{
   return this.http.get<DiagnosticCenter[]>(`${this.baseUrl}/lists`,this.tokenStorageService.httpOption);
  }

  add(recordModel):Observable<record>{
    return this.http.post<record>(this.baseUrl,recordModel,this.tokenStorageService.httpOption);
  }

  setLogDATE(logDate:string){
    this.date=logDate;
  }
  getDate():string{
    return this.date;
  }
  getAppointments():Observable<record[]>{
    return this.http.get<record[]>(this.baseUrl,this.tokenStorageService.httpOption);
  }

  onCancel(patientid: number) {
    let PatientToBeDeleted = this.arrayDetails.find(((value, index) => {
      return value.patientid === patientid;
    }));
    this.arrayDetails.splice(this.arrayDetails.indexOf(PatientToBeDeleted), 1);
  }

  deleteById(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,this.tokenStorageService.httpOption);
  }

}


