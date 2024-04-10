interface ICar {
  fule: string;
  open: boolean;
  freeSeats: number;
}

@changeDoorStatus(true)
@changeAmountOfFuel(95)
class myCar {
  fule: string = '60%';
  open: boolean = true;
  freeSeats: number;

  isOpen() {
    console.log(this.fule);
    return this.open ? 'open' : 'closed';
  }
}

function changeDoorStatus(status: boolean) {
  console.log('door init');
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    console.log('door changed');
    return class extends constructor {
      open = status;
    };
  };
}

function changeAmountOfFuel(amount: number) {
  console.log('fuel init');
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    console.log('fuil changed');
    return class extends constructor {
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
console.log(car.isOpen());
