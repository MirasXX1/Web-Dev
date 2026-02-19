const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
    const text = input.value.trim();
    if (text === "") return;


    const li = document.createElement('li');
    li.className = 'todo-item';


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        span.classList.toggle('done', checkbox.checked);
    };


    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;


    const delBtn = document.createElement('button');
    delBtn.innerHTML = '🗑';
    delBtn.className = 'delete-btn';
    delBtn.onclick = function() {
        li.remove();
    };


    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);

    input.value = "";
}

addBtn.addEventListener('click', addTask);


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});