const todos = [
    { id: 1, text: 'Learn JavaScript', completed: false },
    { id: 2, text: 'Seek for a job', completed: false },
    { id: 3, text: 'Start working', completed: false },
]

console.log(todos);

console.log(todos.map(todo => todo.id === 2 ? { ...todo, completed: true } : todo));

// new approach
const index = todos.findIndex(todo => todo.id === 2);

console.log(todos.with(index, { ...todos[index], completed: true }));
