interface User {
  readonly login: string;
  password: string;
  age: number;
  isDeleted?: boolean;
  // address?: string;
  address: string | undefined; // если поле обязательно, но может быть пустым
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: 'user',
  password: 'qwerty',
  age: 25,
  address: 'Kyiv',
};

const userFreeze: Readonly<User> = {
  login: 'user',
  password: 'qwerty',
  age: 25,
  address: 'Kyiv',
};

userFreeze.password = 'admin';

user.password = 'admin';

const dbName = 'users';

function sentUserData(obj: User, db?: string): void {
  console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
}

const basicPorts: ReadonlyArray<number> = [80, 443, 8080];
basicPorts[0] = 5;
basicPorts.push(3000);

// const basicPorts: readonly [number, ...string[]] = [80, '443', '8080'];
// basicPorts[0] = 5;
// basicPorts.push(3000);
