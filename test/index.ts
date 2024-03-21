// Condition ? true : false
// SomeType extends OtherType ? TrueType : FalseType

const str: string = 'Hello';
type Exempel = 'string' extends 'Hello' ? string : number; // number

type FromUserOrFromBase<T extends string | number> = T extends string
  ? IDataFromUser
  : IDataFromBase;

interface User<T extends 'created' | Date> {
  created: T extends 'created' ? 'created' : Date;
}

const user: User<'created'> = {
  created: 'created',
};

interface IDataFromUser {
  weight: string;
}

interface IDataFromBase {
  calories: number;
}
function calculateDalilyCalories(str: string): IDataFromUser;
function calculateDalilyCalories(num: number): IDataFromBase;
function calculateDalilyCalories<T extends string | number>(
  numOrStr: T,
): T extends string ? IDataFromUser : IDataFromBase {
  if (typeof numOrStr === 'string') {
    const obj: IDataFromUser = {
      weight: numOrStr,
    };
    return obj as FromUserOrFromBase<T>;
  } else {
    const obj: IDataFromBase = {
      calories: numOrStr,
    };
    return obj as FromUserOrFromBase<T>;
  }
}

type GetStringType<T extends 'hello' | 'world' | string> = T extends 'hello'
  ? 'hello'
  : T extends 'world'
  ? 'world'
  : string;

type GetFirstType<T> = T extends Array<infer First> ? First : T;

type Ex = GetFirstType<number[]>;

type ToArray<Type> = Type extends any ? Type[] : never;

type StrArr = ToArray<Ex | string>; // паспределильные условные типы
