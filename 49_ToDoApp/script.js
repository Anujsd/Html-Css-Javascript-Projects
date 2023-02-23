const input = document.querySelector('.input');
const todosContainer = document.querySelector('.todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach((todo) => addTodo(todo.text, todo.completed));
}

function updateLS() {
  const todosEl = document.querySelectorAll('li');
  let todos = [];
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(text, completed) {
  const li = document.createElement('li');
  li.innerHTML = text;

  if (completed) {
    li.classList.add('completed');
  }

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateLS();
  });

  li.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    li.remove();
    updateLS();
  });

  todosContainer.appendChild(li);
}

input.addEventListener('change', (e) => {
  const text = e.target.value;
  e.target.value = '';
  console.log(text);
  addTodo(text, false);
});
