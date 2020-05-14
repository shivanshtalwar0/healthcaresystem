import {TestAttributes} from './test-attributes';

export interface TestModelInterface {
  testName: string
  testAttributes: Array<TestAttributes>
  shouldUpdate:boolean
}


export class TestModel implements TestModelInterface {
  constructor(public testName: string,
              public testAttributes: Array<TestAttributes>,public shouldUpdate:boolean) {
  }

}
