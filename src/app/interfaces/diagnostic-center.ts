//import { TestmodelInterface } from '../model/testmodel';

export class DiagnosticCenter {
  constructor(public centerId:number,
  public centerName:string,
  public contactNo:string,
  public address:string,
  public shouldUpdate:boolean) {
  }
}
/*export class DiagnosticCenterModel implements DiagnosticCenter{
  centerId: number;
  centerName: string;
  shouldUpdate: boolean;
 // tests: TestmodelInterface[];
}*/