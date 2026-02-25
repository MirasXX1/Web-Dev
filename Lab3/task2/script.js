const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const totalCount = document.getElementById('total-count');
const completedCount = document.getElementById('completed-count');

function updateCounter() {
    const allTasks = document.querySelectorAll('.todo-item');
    const completedTasks = document.querySelectorAll('.todo-item input[type="checkbox"]:checked');

    totalCount.textContent = allTasks.length;
    completedCount.textContent = completedTasks.length;
}

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        span.classList.toggle('done', checkbox.checked);
        updateCounter();
    };

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '🗑';
    delBtn.className = 'delete-btn';
    delBtn.onclick = function() {
        li.remove();
        updateCounter();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);

    input.value = "";
    updateCounter();
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
