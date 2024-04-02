class Box {
  width: number;
  height: number;
  volume: string;

  //   constructor(volume: string); // Overload
  //   constructor(width: number); // Overload
  //   constructor(widthOrVolume: number | string) {
  //     if (typeof widthOrVolume === 'number') {
  //       this.width = widthOrVolume;
  //     } else {
  //       this.volume = widthOrVolume;
  //     }
  //     this.height = 500;
  //   }
  // }

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
