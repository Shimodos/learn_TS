interface IEngine {
  model: string;
  capacity: number;
  startEngine: (time: Date) => string;
}

abstract class AbstractVechicle {
  model: string;
  capacity: number;
  abstract startEngine: (time: Date) => string;
  stopEngine(time: Date): string {
    this.startEngine(time);
    return `Engine stopped at ${time}`;
  }
}

class Vechicle extends AbstractVechicle {
  startEngine = (time: Date) => {
    return `Engine started at ${time}`;
  };
}

new Vechicle().startEngine(new Date());
