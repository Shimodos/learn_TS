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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const ICuboid_js_1 = require("./ICuboid.js");
let ShippingContainer = class ShippingContainer {
    width;
    length;
    height;
    createdAt;
    lastCalculation = '';
    constructor(width, length, height) {
        this.width = width;
        this.length = length;
        this.height = height;
        validate(this, 'width', width);
        validate(this, 'length', length);
        validate(this, 'height', height);
    }
    calcArea(multiply) {
        return this.width * this.length * (multiply ? multiply : 1);
    }
    calcVolume(multiply) {
        return this.width * this.length * this.height * (multiply ? multiply : 1);
    }
};
__decorate([
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], ShippingContainer.prototype, "width", void 0);
__decorate([
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], ShippingContainer.prototype, "length", void 0);
__decorate([
    IsInt(),
    Min(1),
    Max(8),
    __metadata("design:type", Number)
], ShippingContainer.prototype, "height", void 0);
__decorate([
    fixLastCalculation('calcArea'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], ShippingContainer.prototype, "calcArea", null);
__decorate([
    fixLastCalculation('calcVolume'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShippingContainer.prototype, "calcVolume", null);
ShippingContainer = __decorate([
    createdAt,
    __metadata("design:paramtypes", [Number, Number, Number])
], ShippingContainer);
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
function createdAt(constructor) {
    return class extends constructor {
        createdAt = new Date();
    };
}
function fixLastCalculation(method) {
    return (target, propertyKey, descriptor) => {
        const oldValue = descriptor.value;
        descriptor.value = function (...args) {
            this.lastCalculation = `Последний подсчет ${method} был ${new Date()}`;
            return oldValue.apply(this, args);
        };
    };
}
function IsInt() {
    return function (target, propertyKey) {
        Reflect.defineMetadata('IsInt', true, target, propertyKey);
    };
}
function Min(limit) {
    return function (target, propertyKey) {
        Reflect.defineMetadata('Min', limit, target, propertyKey);
    };
}
function Max(limit) {
    return function (target, propertyKey) {
        Reflect.defineMetadata('Max', limit, target, propertyKey);
    };
}
function validate(target, propertyKey, value) {
    if (Reflect.getMetadata('IsInt', target, propertyKey) &&
        (!Number.isInteger(value) || value !== parseInt(value))) {
        throw new Error(ICuboid_js_1.underFlow);
    }
    if (Reflect.hasMetadata('Min', target, propertyKey) &&
        value < Reflect.getMetadata('Min', target, propertyKey)) {
        throw new Error(`Property ${propertyKey} should be more than ${Reflect.getMetadata('Min', target, propertyKey)}`);
    }
    if (Reflect.hasMetadata('Max', target, propertyKey) &&
        value > Reflect.getMetadata('Max', target, propertyKey)) {
        throw new Error(`Property ${propertyKey} should be less than ${Reflect.getMetadata('Max', target, propertyKey)}`);
    }
    return true;
}
function finalValidate(obj) {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        for (let key in obj) {
            validate(obj, key, obj[key]);
        }
    }
}
