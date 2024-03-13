interface ProcessingFn {
  <T>(data: T): T;
}

function process<T>(data: T): T {
  return data;
}

let newFunc: ProcessingFn = process;

type MyEvent<T> = T;

const num: MyEvent<number> = 1;

interface ParentsOfUser {
  mother: string;
  father: string;
}

interface User<ParentsData extends ParentsOfUser> {
  login: string;
  age: number;
  parents: ParentsData;
}

const user: User<{ mother: string; father: string; married: boolean }> = {
  login: 'admin',
  age: 10,
  parents: {
    mother: 'Anna',
    father: 'no name',
    married: true,
  },
};

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [1, 2, 3];

// const depositMoney = <T extends number | string>(amount: T): T => {
//   console.log(`Deposited: ${amount}`);
//   return amount;
// };

// depositMoney(100);
// depositMoney('100');
// depositMoney(true); // Error

const depositMoney = (amount: number | string): number | string => {
  console.log(`Deposited: ${amount}`);
  return amount;
};

depositMoney(100);
depositMoney('100');
depositMoney(true); // Error
