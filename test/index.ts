// let smth: unknown;
// smth = 'Hello, World!';

// let data: string[] = smth;
// data.find((e) => e);

// const someValue: unknown = 10
// someValue.method()

// function fetchData(data: unknown): void {
//   if (typeof data === 'string') {
//     console.log(data.toUpperCase());
//   }
// }

const userData = '{"isBirthdayData": true ,"name": "John" , "age": 30}';

function safePars(s: string): unknown {
  return JSON.parse(s);
}

const data = safePars(userData);

function transferData(d: unknown): void {
  if (typeof d === 'string') {
    console.log(d.toUpperCase());
  } else if (typeof d === 'object' && d) {
    console.log(data);
  } else {
    console.error('Wrong data type');
  }
}

transferData(data);

try {
  if (1) {
    throw new Error('Error');
  }
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  } else if (typeof e === 'string') {
    console.error(e);
  }
}

type T0 = any | unknown; // any
type T1 = number | unknown; // unknown Перекрывает другие типы
type T2 = string & unknown;
type T3 = unknown & any; // any
