var TOP = 'Top';
var BOTTOM = 'Bottom';
var LEFT = 'Left';
var RIGHT = 'Right';
var Direction;
(function (Direction) {
    Direction[Direction["TOP"] = 0] = "TOP";
    Direction[Direction["BOTTOM"] = 1] = "BOTTOM";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
var timingFunc;
(function (timingFunc) {
    timingFunc["EASE"] = "ease";
    timingFunc["EASE_IN"] = "ease-in";
    timingFunc["EASE_OUT"] = "ease-out";
})(timingFunc || (timingFunc = {}));
var timingFuncB;
(function (timingFuncB) {
    timingFuncB[timingFuncB["EASE"] = 1] = "EASE";
    timingFuncB[timingFuncB["EASE_IN"] = 2] = "EASE_IN";
    timingFuncB[timingFuncB["EASE_OUT"] = 3] = "EASE_OUT";
})(timingFuncB || (timingFuncB = {}));
function frame(elem, dir, tFunc) {
    if (dir === Direction.RIGHT) {
        console.log(tFunc);
    }
}
frame('test', Direction.RIGHT, timingFunc.EASE_OUT);
