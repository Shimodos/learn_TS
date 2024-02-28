// Primitive literal type
var msg = 'hello';
msg = 'hello'; // OK
var port3000 = 3000;
var port3001 = 3001;
function startServer(protocol, port) {
    if (port === 3000 || port === 3001) {
        console.log("Server started on ".concat(protocol, "://localhost:").concat(port));
    }
    else {
        throw new Error('Invalid port');
    }
    return 'Server started';
}
startServer('http', 3001); // OK
function createAnimation(id, animName, timingFunc, duration, iterCount) {
    if (timingFunc === void 0) { timingFunc = 'ease'; }
    // const elem = document.getElementById(`#${id}`) as HTMLElement;
    // if (elem) {
    console.log(" ".concat(animName, " ").concat(timingFunc, " ").concat(duration, "s ").concat(iterCount));
    // elem.style.animation = `${animName} ${timingFunc} ${duration}s ${iterCount}`;
    // }
}
createAnimation('id', 'fade', 'ease-in', 2, 'infinite'); // OK
