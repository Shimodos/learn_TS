interface Car {
  name: 'car';
  engine: string;
  wheels: number;
}

interface Ship {
  name: 'ship';
  engine: string;
  sail: number;
}

interface Airplane {
  name: 'airplane';
  engine: string;
  wings: string;
}

interface ComplVeicle {
  name: 'car' | 'ship' | 'airplane';
  engine: string;
  wheels?: number;
  sail?: number;
  wings?: string;
}

const car: ComplVeicle = {
  name: 'car',
  engine: 'V8',
};

type Veicle = Car | Ship | Airplane;

function repairVeicle(veicle: ComplVeicle): void {
  switch (veicle.name) {
    case 'car':
      console.log(veicle.wheels! * 4);
      break;
    case 'ship':
      console.log(veicle.sail);
      break;
    case 'airplane':
      console.log(veicle.wings);
      break;
    default:
      // const smth: never = veicle;
      console.log('Ooops!');
  }
}

repairVeicle(car);
