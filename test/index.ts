interface ICar {
  fule: string;
  open: boolean;
  freeSeats: number;
}

@changeDoorStatus(false)
@changeAmountOfFuel(95)
class myCar implements ICar {
  fule: string = '60%';
  open: boolean = true;
  errors: any;

  @checkNumberOfSeats(3)
  freeSeats: number = 2;

  @checkAmountOfFuel
  isOpen(value: string) {
    return this.open ? 'open' : `closed ${value}`;
  }
}

function checkNumberOfSeats(limit: number) {
  return function (target: undefined, context: ClassFieldDecoratorContext) {
    return function (this: any, newVal: number) {
      if (newVal >= 1 && newVal < limit) {
        return newVal;
      } else {
        throw Error('Not enough seats');
      }
    };
  };
}

// function checkAmountOfFuel(
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: PropertyDescriptor,
// ): PropertyDescriptor | void {
//   const oldValue = descriptor.value;
//   descriptor.value = function (this: any, ...args: any[]) {
//     console.log(this.fule);

//     return oldValue.apply(this, args);
//   };
// }

function checkAmountOfFuel(target: any, context: ClassMethodDecoratorContext) {
  return function (this: any, ...args: any[]) {
    console.log(this.fule);
    return target.apply(this, args);
  };
}

// function checkAmountOfFuel<T, A extends any[], R>(
//   target: (this: T, ...args: A) => R,
//   context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>,
// ) {
//   return function (this: T, ...args: A): R {
//     // console.log(this.fule);
//     console.log(`${String(context.name)} is sttarted`);
//     return target.apply(this, args);
//   };
// }

// function changeDoorStatus(status: boolean) {
//   console.log('door init');
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     console.log('door changed');
//     return class extends constructor {
//       open = status;
//     };
//   };
// }

// function changeAmountOfFuel(amount: number) {
//   console.log('fuel init');
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     console.log('fuil changed');
//     return class extends constructor {
//       fule = `${amount}%`;
//     };
//   };
// }

function changeDoorStatus(status: boolean) {
  console.log('door init');
  return <T extends { new (...args: any[]): {} }>(target: T, context: ClassDecoratorContext<T>) => {
    console.log('door changed');
    return class extends target {
      open = status;
    };
  };
}

function changeAmountOfFuel(amount: number) {
  console.log('fuel init');
  return <T extends { new (...args: any[]): {} }>(target: T, context: ClassDecoratorContext<T>) => {
    console.log('fuil changed');
    return class extends target {
      fule = `${amount}%`;
    };
  };
}

// function closeCare<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     open = false;
//     fule = '100%';
//   };
// }

// function addFuel(car: myCar) {
//   car.fule = '100%';
//   console.log('Car is full');
//   return car;
// }

const car = new myCar();
car.freeSeats = -1;
console.log(car);
console.log(car.errors);
