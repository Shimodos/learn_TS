interface User {
  login: string;
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

const dbName = 'users';

function sentUserData(obj: User, db?: string): void {
  console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
}
