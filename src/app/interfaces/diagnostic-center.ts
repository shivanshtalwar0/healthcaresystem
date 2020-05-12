//import { TestmodelInterface } from '../model/testmodel';

<<<<<<< HEAD
export interface DiagnosticCenter {
  centerId:number;
  centerName:string;
  shouldUpdate:boolean;
 // tests:Array<TestmodelInterface>;

=======
export class DiagnosticCenter {
  constructor(public centerId:number,
  public centerName:string,
  public contactNo:string,
  public address:string,
  public shouldUpdate:boolean) {
  }
>>>>>>> fa1e61afeab5eb5c6455db0e4a11a9715c141697
}
/*export class DiagnosticCenterModel implements DiagnosticCenter{
  centerId: number;
  centerName: string;
  shouldUpdate: boolean;
 // tests: TestmodelInterface[];
}*/