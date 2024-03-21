// Condition ? true : false 
// SomeType extends OtherType ? TrueType : FalseType

const str: string = 'Hello';
type Exempel = 'string' extends 'Hello' ? string : number; // number

type FromUserOrFromBase<T extends string | number >

interface IDataFromUser {
  weight: string;
}

interface IDataFromBase {
  weight: number;
}
