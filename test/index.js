var fetchData = function (url, method) {
    console.log(method);
};
var reqOptions = {
    url: 'https://api.com',
    // method: 'POST' as const, // its type is 'POST' not string
    method: 'POST', // its type is 'POST' not string
};
// fetchData('qqq', 'POST');
// fetchData(reqOptions.url, reqOptions.method);
fetchData(reqOptions.url, reqOptions.method);
var box = document.querySelector('.box');
var input = document.querySelector('input');
var someNumber = +input.value;
console.log(someNumber * 2);
