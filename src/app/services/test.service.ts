import {Injectable} from '@angular/core';
import {TestModel, TestModelInterface} from '../model/testmodel';
import {HttpClient} from '@angular/common/http';

// import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  private arrayTest: Array<TestModel> = [];
  private baseUrl = '';


  constructor(private http: HttpClient) {
    // this.baseUrl=`${environment.baseMwUrl}/testoperations`; //http://localhost:7700/testoperations
    this.baseUrl = 'http://localhost:7700/testoperations';
  }

  addTest(testModel: TestModel) {
    this.arrayTest.push(testModel)
    // this.http.post<TestModel>(this.baseUrl + '/add', testModel).subscribe((data) => {
    //   this.getTestList();
    // });
  }
  updateTest(testModel:TestModel){
    this.arrayTest[this.arrayTest.indexOf(testModel)]=testModel
  }

  toggleUpdate(testModel:TestModel){
    let index=this.arrayTest.indexOf(testModel)
    this.arrayTest.forEach((value,i) => {
      if(index!=i){
      value.shouldUpdate=false;
      }
    })
    this.arrayTest[index].shouldUpdate=true;
    this.arrayTest[index].testName=testModel.testName;
    this.arrayTest[index].testAttributes=testModel.testAttributes;
  }


  deleteById(test:TestModel) {
    this.arrayTest.splice(this.arrayTest.indexOf(test),1)
    // this.http.delete<void>(`${this.baseUrl + '/delete'}/${testId}`).subscribe((data) => {
    //   this.getTestList();
    // });
  }

  getTestList() {
    // this.http.get<TestModel[]>(this.baseUrl + '/view').subscribe((data) => {
    //   this.arrayTest = data;
    //
    // });
  }

  public get testList() {
    return this.arrayTest;
  }


}

