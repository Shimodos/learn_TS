interface ICar {
  fule: string;
  open: boolean;
  freeSeats: number;
}

@closeCare
class myCar {
  fule: string = '60%';
  open: boolean = true;
  freeSeats: number;

  isOpen() {
    console.log(this.fule);
    return this.open ? 'open' : 'closed';
  }
}

function closeCare<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    open = false;
    fule = '100%';
  };
}

// function addFuel(car: myCar) {
//   car.fule = '100%';
//   console.log('Car is full');
//   return car;
// }

const car = new myCar();
console.log(car.isOpen());
