var jsonTest = '{"name": "John", "age": 30, "city": "New York"}';
var obj = JSON.parse(jsonTest);
var toDoList = [];
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => {
//     if ('id' in json) {
//       toDoList.push(json);
//     }
//     console.log(toDoList);
//   });
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) { return response.json(); })
    .then(function (json) {
    if ('id' in json && 'userId' in json && 'title' in json && 'completed' in json) {
        toDoList.push(json);
    }
    else if (Array.isArray(json)) {
        toDoList = json;
    }
    else {
        console.log("Error: ".concat(json));
    }
    console.log(toDoList);
});
var promise = new Promise(function (resolve, reject) {
    reject('This is an error');
});
promise.then(function (value) {
    console.log(value.toLowerCase());
});
