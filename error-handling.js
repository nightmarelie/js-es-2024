const sendLog = (...args) => console.log(...args);

async function asyncTask() {
  await fetch('https://1jsonplaceholder.typicode.com/todos/1').catch(sendLog);
}

await asyncTask();
