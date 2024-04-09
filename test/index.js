"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let myCar = class myCar {
    fule = '60%';
    open = true;
    freeSeats;
    isOpen() {
        console.log(this.fule);
        return this.open ? 'open' : 'closed';
    }
};
myCar = __decorate([
    closeCare
], myCar);
function closeCare(constructor) {
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
