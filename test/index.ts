type voidFunc = () => void;

const retString: voidFunc = () => {
  return 'hello';
};

const s = retString();
console.log(s);

const retNum: voidFunc = () => {
  return 1;
};

const n = retNum();
console.log(n);

const names = ['Alice', 'Bob', 'Eve'];
const newArr = names.slice();

names.forEach((name, i, arr) => arr.push('newName'));
