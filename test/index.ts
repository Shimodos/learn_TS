function prinMsg(msg: string[] | number | boolean) {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (isNumber(msg)) {
    console.log(msg);
  } else {
    console.log(msg);
  }
  console.log(msg);
}

prinMsg(4);

function isNumber(x: unknown): x is number {
  return typeof x === 'number';
}

interface Car {
  name: 'car';
  engine: string;
  wheels: {
    count: number;
    typr: string;
  };
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

interface SuperAirolane {
  name: 'smth';
  engine: string;
  wings: string;
}

type Veicle = Car | Ship | Airplane | SuperAirolane;

function repairVeicle(veicle: Veicle): void {
  // if (isCar(veicle)) {
  //   veicle.wheels.typr;
  // } else if (isShio(veicle)) {
  //   veicle;
  // } else {
  //   veicle.wings; // never
  // }

  switch (veicle.name) {
    case 'car':
      console.log(veicle.wheels);
      break;
    case 'ship':
      console.log(veicle.sail);
      break;
    case 'airplane':
      console.log(veicle.wings);
      break;
    case 'smth':
      console.log(veicle.engine);
      break;
    default:
      const smth: never = veicle;
      console.log('Ooops!');
  }
}

// function isCar(car: Car | Ship): car is Car {
//   return 'wheels' in car;
// }

function isCar(car: Veicle): car is Car {
  return (car as Car).wheels.count !== undefined;
}

function isShio(ship: Veicle): ship is Ship {
  return 'sail' in ship;
}
