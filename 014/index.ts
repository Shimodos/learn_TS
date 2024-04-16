import 'reflect-metadata';

interface ICuboid {
  width: number;
  length: number;
  height: number;
  calcArea: (multiply?: number) => number;
  calcVolume: (multiply?: number) => number;
}

@createdAt
class ShippingContainer implements ICuboid {
  @IsInt()
  @Min(1)
  width: number;

  @IsInt()
  @Min(1)
  length: number;

  @IsInt()
  @Min(1)
  @Max(8)
  height: number;
  createdAt: any;
  lastCalculation: string = '';

  constructor(width: number, length: number, height: number) {
    this.width = width;
    this.length = length;
    this.height = height;
    validate(this, 'width', width);
    validate(this, 'length', length);
    validate(this, 'height', height);
  }

  @fixLastCalculation('calcArea')
  calcArea(multiply?: number): number {
    return this.width * this.length * (multiply ? multiply : 1);
  }
  @fixLastCalculation('calcVolume')
  calcVolume(multiply?: number) {
    return this.width * this.length * this.height * (multiply ? multiply : 1);
  }
}

// 1. Необходимо создать декоратор класса, который будет записывать дату создания контейнера
// Простыми словами - создавать в нем новое свойство createdAt с датой создания экземпляра

// 2. Необходимо создать декораторы IsInt, Min и Max, которые будут валидировать свойства класса
// Применение смотрите в самом классе. При ошибке выполняйте throw new Error
// IsInt проверяет на то, что было передано целое число

// 3. Необходимо создать декоратор метода, который при каждом запуске метода будет создавать
// ИЛИ менять содержимое свойства самого класса lastCalculation
// Как значение записывать в него строку "Последний подсчет ${method} был ${Дата}",
// Где method - это название подсчета, который передается при вызове декоратора (площадь или объем)

const container = new ShippingContainer(10, 100, 7);
container.width = 10;
container.height = 5;
console.log(container.calcArea());
console.log(container.lastCalculation);
console.log(container.calcVolume());
console.log(container.lastCalculation);

// Для проверки
finalValidate(container);

function createdAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

function fixLastCalculation(method: string) {
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor | void => {
    const oldValue = descriptor.value;

    descriptor.value = function (this: any, ...args: any[]) {
      this.lastCalculation = `Последний подсчет ${method} был ${new Date()}`;
      return oldValue.apply(this, args);
    };
  };
}

function IsInt() {
  return function (target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata('IsInt', true, target, propertyKey);
  };
}

function Min(limit: number) {
  return function (target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata('Min', limit, target, propertyKey);
  };
}

function Max(limit: number) {
  return function (target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata('Max', limit, target, propertyKey);
  };
}

function validate(target: any, propertyKey: string, value: any): boolean {
  if (
    Reflect.getMetadata('IsInt', target, propertyKey) &&
    (!Number.isInteger(value) || value !== parseInt(value))
  ) {
    throw new Error(`Property ${propertyKey} should be an integer`);
  }

  if (
    Reflect.hasMetadata('Min', target, propertyKey) &&
    value < Reflect.getMetadata('Min', target, propertyKey)
  ) {
    throw new Error(
      `Property ${propertyKey} should be more than ${Reflect.getMetadata(
        'Min',
        target,
        propertyKey,
      )}`,
    );
  }

  if (
    Reflect.hasMetadata('Max', target, propertyKey) &&
    value > Reflect.getMetadata('Max', target, propertyKey)
  ) {
    throw new Error(
      `Property ${propertyKey} should be less than ${Reflect.getMetadata(
        'Max',
        target,
        propertyKey,
      )}`,
    );
  }

  return true;
}

function finalValidate(obj: unknown) {
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    for (let key in obj) {
      validate(obj, key, obj[key as keyof typeof obj]);
    }
  }
}
