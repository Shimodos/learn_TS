let salary: number;
salary = 1000;

interface UserData {
  name: string;
  age: number;
  city: string;
}

const userData = '{"name": "John", "age": 30, "city": "New York"}';

const arr = ['123', 5, true];

const user: UserData = JSON.parse(userData);
console.log(user.name);

let isOk = true;
let movement: boolean | string = false;

if (isOk) {
  movement = 'forward';
}
