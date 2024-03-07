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
  engine: string;
  wheels: {
    count: number;
    typr: string;
  };
}

interface Ship {
  engine: string;
  sail: number;
}

function repairVeicle(veicle: Car | Ship): void {
  if (isCar(veicle)) {
    veicle.wheels.typr;
  } else if (isShio(veicle)) {
    veicle;
  } else {
    veicle; // never
  }
}

// function isCar(car: Car | Ship): car is Car {
//   return 'wheels' in car;
// }

function isCar(car: Car | Ship): car is Car {
  return (car as Car).wheels.count !== undefined;
}

function isShio(ship: Car | Ship): ship is Ship {
  return 'sail' in ship;
}
