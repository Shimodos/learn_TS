const fetchData = (url: string, method: 'GET' | 'POST'): void => {
  console.log(method);
};

const reqOptions = {
  url: 'https://api.com',
  // method: 'POST' as const, // its type is 'POST' not string
  method: 'POST', // its type is 'POST' not string
};

// fetchData('qqq', 'POST');
// fetchData(reqOptions.url, reqOptions.method);
fetchData(reqOptions.url, <'GET'>reqOptions.method);

const box = document.querySelector('.box') as HTMLDivElement;
const input = <HTMLInputElement>document.querySelector('input');

const someNumber: number = +input.value;
console.log(someNumber * 2);

let a = 'value' as const;
let b = {
  f: 100,
} as const;
let c = [1, 2, 3] as const;

// error
let value = 'value';
let arr = [1, 2, 3];
let obj = {
  f: 100,
};

// let T0 = value as const

let T5 = (Math.round(Math.random() * 1) ? 'value' : 'value2') as const;
