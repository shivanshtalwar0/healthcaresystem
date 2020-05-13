
import { TestAttributes } from './test-attributes';


export class Testmodel {


    public testId:number;
    public testName:string;
   // public centerId:number;
    
	
	
    public testAttributes:Array<TestAttributes>=[];
    constructor(){}
    /*constructor(tname:string)
    {
        //this.testAttributes=[];
       this.testId=Math.round((Math.random()*10000000));
    }
    
    
   
   /* private _testId: number;
    
    public get testId(): number {
        return this._testId;
    }
    public set testId(value: number) {
        this._testId = value;
    }
    private _testName: string;
    public get testName(): string {
        return this._testName;
    }
    public set testName(value: string) {
        this._testName = value;
    }

   // private testAttributes:Array<string>
    
    

    //addTestAttribute(testAttribute:string){
        //this.testAttributes.push(testAttribute)
  //  }*/

    

}
