function calculate(a: number, b: number): number {
  return a + b;
}

type CalculateRT = ReturnType<typeof calculate>;

let anotheRes: CalculateRT = 10;

type CalculateParams = Parameters<typeof calculate>;
type PT1 = Parameters<(a: number) => number>;
type PT2 = Parameters<<T>(arg: T) => number>;

class Example {
  constructor(
    public a: number,
    public b: number,
  ) {}
}

type T0 = ConstructorParameters<typeof Example>;
