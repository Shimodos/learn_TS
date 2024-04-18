"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const limitMetadataKey = Symbol('limit');
let myCar = class myCar {
    fuel = '50%';
    open = true;
    test;
    // constructor(@limit() test: number) {
    //   this.test = test;
    // }
    freeSeats;
    // @checkAmountOfFuel()
    isOpen(value) {
        return this.open ? 'open' : `close ${value}`;
    }
    startTravel(passengers) {
        console.log(`Started with ${passengers} passengers`);
    }
};
__decorate([
    checkNumberOfSeats(4),
    __metadata("design:type", Number)
], myCar.prototype, "freeSeats", void 0);
__decorate([
    validate(),
    __param(0, limit()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], myCar.prototype, "startTravel", null);
myCar = __decorate([
    changeDoorStatus(false),
    changeAmountOfFuel(95)
], myCar);
function limit() {
    console.log('Init: Parameter Decorator');
    return (target, propertyKey, parameterIndex) => {
        console.log('Call: Parameter Decorator');
        let limitedParametrs = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
        limitedParametrs.push(parameterIndex);
        Reflect.defineMetadata(limitMetadataKey, limitedParametrs, target, propertyKey);
    };
}
function validate() {
    console.log('Init: Method Decorator');
    return (target, propertyKey, descriptor) => {
        console.log('Call: Method Decorator');
        let method = descriptor.value;
        descriptor.value = function (...args) {
            let limitedParametrs = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey);
            if (limitedParametrs) {
                for (let index of limitedParametrs) {
                    if (args[index] > 4) {
                        throw new Error('Нельзя больше 4х пассажиров');
                    }
                }
            }
            return method?.apply(this, args);
        };
    };
}
function checkNumberOfSeats(limit) {
    console.log('Init: Property Decorator');
    return function (target, propertyKey) {
        console.log('Call: Property Decorator');
        let symbol = Symbol();
        const getter = function () {
            return this[symbol];
        };
        const setter = function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                this[symbol] = newAmount + 1;
            }
            else {
                // console.log(`Больше ${limit} сидений быть не может`);
                Object.defineProperty(target, 'errors', {
                    value: `Больше ${limit} сидений быть не может`,
                });
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
function checkAmountOfFuel() {
    console.log('Init: Method Decorator');
    return (target, propertyKey, descriptor) => {
        console.log('Call: Method Decorator');
        const oldValue = descriptor.value;
        descriptor.value = function (...args) {
            console.log(this.fuel);
            return oldValue.apply(this, args);
        };
    };
}
function changeDoorStatus(status) {
    console.log('Init: Class Decorator Door');
    return (constructor) => {
        console.log('Call: Class Decorator Door');
        return class extends constructor {
            open = status;
        };
    };
}
function changeAmountOfFuel(amount) {
    console.log('Init: Class Decorator Fuel');
    return (constructor) => {
        console.log('Call: Class Decorator Fuel');
        return class extends constructor {
            fuel = `${amount}%`;
        };
    };
}
const car = new myCar();
car.startTravel(3);
// console.log(car);
// f(x(y()));
