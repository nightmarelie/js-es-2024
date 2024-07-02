const sendLog = (...args) => console.log(...args);

async function asyncTask() {
  await fetch('https://1jsonplaceholder.typicode.com/todos/1').catch(err => {
    sendLog('Error:', err);

    throw new Error('Failed to fetch data', { cause: err });
  });
}

await asyncTask();
