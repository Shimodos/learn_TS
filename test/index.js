"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var limitMetadataKey = Symbol('limit');
var myCar = function () {
    var _classDecorators = [changeDoorStatus(false), changeAmountOfFuel(95)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _freeSeats_decorators;
    var _freeSeats_initializers = [];
    var _isOpen_decorators;
    var _startTravel_decorators;
    var myCar = _classThis = /** @class */ (function () {
        function myCar_1() {
            this.fuel = (__runInitializers(this, _instanceExtraInitializers), '50%');
            this.open = true;
            this.freeSeats = __runInitializers(this, _freeSeats_initializers, void 0);
        }
        myCar_1.prototype.isOpen = function (value) {
            return this.open ? 'open' : "close ".concat(value);
        };
        myCar_1.prototype.startTravel = function (passengers) {
            console.log("Started with ".concat(passengers, " passengers"));
        };
        return myCar_1;
    }());
    __setFunctionName(_classThis, "myCar");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _freeSeats_decorators = [checkNumberOfSeats(4)];
        _isOpen_decorators = [checkAmountOfFuel];
        _startTravel_decorators = [validate];
        __esDecorate(_classThis, null, _isOpen_decorators, { kind: "method", name: "isOpen", static: false, private: false, access: { has: function (obj) { return "isOpen" in obj; }, get: function (obj) { return obj.isOpen; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _startTravel_decorators, { kind: "method", name: "startTravel", static: false, private: false, access: { has: function (obj) { return "startTravel" in obj; }, get: function (obj) { return obj.startTravel; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _freeSeats_decorators, { kind: "field", name: "freeSeats", static: false, private: false, access: { has: function (obj) { return "freeSeats" in obj; }, get: function (obj) { return obj.freeSeats; }, set: function (obj, value) { obj.freeSeats = value; } }, metadata: _metadata }, _freeSeats_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        myCar = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return myCar = _classThis;
}();
function limit(target, propertyKey, parameterIndex) {
    console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
    console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
    console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));
    var limitedParametrs = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
    limitedParametrs.push(parameterIndex);
    Reflect.defineMetadata(limitMetadataKey, limitedParametrs, target, propertyKey);
}
function validate(target, propertyKey, descriptor) {
    var method = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var limitedParametrs = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey);
        if (limitedParametrs) {
            for (var _a = 0, limitedParametrs_1 = limitedParametrs; _a < limitedParametrs_1.length; _a++) {
                var index = limitedParametrs_1[_a];
                if (args[index] > 4) {
                    throw new Error('Нельзя больше 4х пассажиров');
                }
            }
        }
        return method === null || method === void 0 ? void 0 : method.apply(this, args);
    };
}
function checkNumberOfSeats(limit) {
    return function (target, propertyKey) {
        var symbol = Symbol();
        var getter = function () {
            return this[symbol];
        };
        var setter = function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                this[symbol] = newAmount + 1;
            }
            else {
                // console.log(`Больше ${limit} сидений быть не может`);
                Object.defineProperty(target, 'errors', {
                    value: "\u0411\u043E\u043B\u044C\u0448\u0435 ".concat(limit, " \u0441\u0438\u0434\u0435\u043D\u0438\u0439 \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442"),
                });
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
function checkAmountOfFuel(target, propertyKey, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.fuel);
        return oldValue.apply(this, args);
    };
}
function changeDoorStatus(status) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.open = status;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
function changeAmountOfFuel(amount) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.fuel = "".concat(amount, "%");
                return _this;
            }
            return class_2;
        }(constructor));
    };
}
var car = new myCar();
car.startTravel(3);
// console.log(car);
// f(x(y()));
