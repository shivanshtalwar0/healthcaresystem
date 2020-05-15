export interface TestAttributesInterface {
  testAttributeName:string
  id:number;
}


export class TestAttributes implements TestAttributesInterface{
    constructor(public testAttributeName:string,public id:number) {
    }
}
