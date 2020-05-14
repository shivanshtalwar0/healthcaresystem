export interface TestAttributesInterface {
  testAttributeName:string
}


export class TestAttributes implements TestAttributesInterface{
    constructor(public testAttributeName:string) {
    }
}
