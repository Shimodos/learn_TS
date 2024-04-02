"use strict";
class Box {
    width;
    height;
    constructor(width) {
        this.width = width;
        this.height = 500;
    }
}
const firstBox = new Box(100);
console.log(firstBox);
