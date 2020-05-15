import {TestModel} from './testmodel';

export class DiagnosticCenter {
  private _centerId: number;
  private _centerName:string;
  get centerName(): string {
    return this._centerName;
  }

  set centerName(value: string) {
    this._centerName = value;
  }

  private _address: string;
  private _contactNo: string;
  private _shouldUpdate: boolean = false;
  private _testList: Array<TestModel> = [];


  constructor(centerId: number, centerName: string, address: string, contactNo: string, shouldUpdate: boolean, testList: Array<TestModel>) {
    this._centerId = centerId;
    this._centerName = centerName;
    this._address = address;
    this._contactNo = contactNo;
    this._shouldUpdate = shouldUpdate;
    this._testList = testList;
  }

  get centerId(): number {
    return this._centerId;
  }

  set centerId(value: number) {
    this._centerId = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get contactNo(): string {
    return this._contactNo;
  }

  set contactNo(value: string) {
    this._contactNo = value;
  }

  get shouldUpdate(): boolean {
    return this._shouldUpdate;
  }

  set shouldUpdate(value: boolean) {
    this._shouldUpdate = value;
  }

  get testList(): Array<TestModel> {
    return this._testList;
  }

  set testList(value: Array<TestModel>) {
    this._testList = value;
  }


}
