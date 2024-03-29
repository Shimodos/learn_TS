const jsonTest = '{"name": "John", "age": 30, "city": "New York"}';

const obj = JSON.parse(jsonTest);

let toDoList: ToDo[] = [];
interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => {
//     if ('id' in json) {
//       toDoList.push(json);
//     }
//     console.log(toDoList);
//   });

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => {
    if ('id' in json && 'userId' in json && 'title' in json && 'completed' in json) {
      toDoList.push(json);
    } else if (Array.isArray(json)) {
      toDoList = json;
    } else {
      console.log(`Error: ${json}`);
    }
    console.log(toDoList);
  });

const promise = new Promise<string>((resolve, reject) => {
  reject('This is an error');
});

promise.then((value) => {
  console.log(value.toLowerCase());
});
