const message: string | number = 'Hello, world!';
const messages: string[] | number[] = ['Hello', 'world'];

// union type
// function printMessage(value: string | number | boolean): void {
//   if (typeof value === 'string' || typeof value === 'number') {
//     console.log(value.toString());
//   } else {
//     console.log(value);
//   }
//   console.log(value);
// }

function printMessage(value: string[] | number | boolean): void {
  if (Array.isArray(value)) {
    value.forEach((v) => console.log(v));
  } else if (typeof value === 'number') {
    console.log(value.toFixed);
  } else {
    console.log(value);
  }
}

printMessage(123);

const printReadings = (a: string | number, b: number | boolean): void => {
  if (a === b) {
    console.log(a, b);
  }
};

const printReadings2 = (a: number[] | string): void => {
  console.log(a.slice(0, 3));
};

const checkReading = (readings: { system: number } | { user: number }): void => {
  if ('system' in readings) {
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
};

function logValue(x: string | Date) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
