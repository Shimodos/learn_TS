function processingData<T, S>(data: T[], options: S): string {
  data.length;
  switch (typeof data) {
    case 'string':
      return `${data} + speed + ${options}`;
      break;
    case 'number':
      return `${data} + speed + ${options}`;
      break;
    default:
      return 'error';
  }
}

let res1 = processingData([1], 'fast');
let res2 = processingData(['1'], 'slow');
const res3 = processingData<number, string>([10], 'fast');

function processingData2<T>(data: T): T {
  return data;
}

interface MyPosition {
  <T>(data: T): T;
}

let newFunnc: MyPosition = processingData2;

interface DataSever {
  processingData: MyPosition; // <T>(data: T) => T; запрос типа функции
}

const sever: DataSever = {
  // processingData(data) {
  //   console.log(data);
  //   return data;
  // }
  processingData: processingData2,
};
