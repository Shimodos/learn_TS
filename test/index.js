function prinMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (isNumber(msg)) {
        console.log(msg);
    }
    else {
        console.log(msg);
    }
    console.log(msg);
}
prinMsg(4);
function isNumber(x) {
    return typeof x === 'number';
}
function repairVeicle(veicle) {
    console.log(veicle.engine);
}
