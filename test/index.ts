const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'Alex';

const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: 'Alex',
  messages: {
    error: 'Error',
  },
};

const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'Alex', 'John', 'Ann']; // кортеж - массив с фиксированным количеством элементов
// userDataTuple[3];
// userDataTuple.push(5);
// userDataTuple[3];

const res = userDataTuple.map((t) => `${t} - done`);

const [bthd, age, userName] = userDataTuple;

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
  } else {
    return createError(error);
  }
}

console.log(logBrtMsg(userData));

const departments: string[] = ['dev', 'design', 'marceting'];

const department = departments[0];

// departments.push(5);
const report = departments.filter((d: string) => d !== 'dev').map((d: string) => `${d} - done`);

const nums: number[][] = [
  [3, 4, 6],
  [3, 4, 6],
];

const [first] = report;
console.log(first);
