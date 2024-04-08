"use strict";
class AbstractVechicle {
    model;
    capacity;
    stopEngine(time) {
        this.startEngine(time);
        return `Engine stopped at ${time}`;
    }
}
class Vechicle extends AbstractVechicle {
    startEngine = (time) => {
        return `Engine started at ${time}`;
    };
}
new Vechicle().startEngine(new Date());
