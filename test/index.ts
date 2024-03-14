class User<T, S> {
  name: T;
  age: S;

  constructor(name: T, age: S) {
    this.name = name;
    this.age = age;
  }

  sayMyFullName<T>(surname: T): string {
    if (typeof this.name !== 'string') {
      return `${this.name}`;
    } else {
      return `${this.name} ${surname}`;
    }
  }
}

class AdminUser extends User<string, number> {
  constructor(name: string, age: number) {
    super(name, age);
  }

  sayMyFullName<T>(surname: T): string {
    return `Admin: ${this.name} ${surname}`;
  }
}

const ivan = new User('Ivan', 30);
const alex = new User<string, number>('Alex', 25);

const nameData = 'Ivan';
const ageData = 30;

const ivan2 = new User<string, number>(nameData, ageData);

console.log(ivan.sayMyFullName('Ivanov'));
console.log(alex);
