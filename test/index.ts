class Box {
  width: number;
  height: number;

  constructor(width: number) {
    this.width = width;
    this.height = 500;
  }
}

const firstBox = new Box(100);

console.log(firstBox);

class User {
  name: string;
  age: number;
}

const ivan = new User();
ivan.name = 'Ivan';
ivan.age = 25;
console.log(ivan);
