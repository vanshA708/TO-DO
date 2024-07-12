const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push({ task, done: false });
        taskInput.value = '';
        renderTaskList();
    }
}

function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.task;
        if (task.done) {
            taskElement.classList.add('done');
        }
        taskElement.addEventListener('click', () => {
            task.done = !task.done;
            renderTaskList();
        });
        taskList.appendChild(taskElement);
    });
}

renderTaskList();