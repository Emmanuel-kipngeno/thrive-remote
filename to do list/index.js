document.getElementById('add-task-btn').addEventListener('click', addTask);  
document.getElementById('task-list').addEventListener('click', toggleComplete);  

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];  

function renderTasks() {  
    const taskList = document.getElementById('task-list');  
    taskList.innerHTML = '';  
    tasks.forEach((task, index) => {  
        const li = document.createElement('li');  
        li.textContent = task.text;  
        if (task.completed) {  
            li.classList.add('completed');  
        }  
        li.dataset.index = index;  
        taskList.appendChild(li);  
    });  
}  

function addTask() {  
    const taskInput = document.getElementById('task-input');  
    if (taskInput.value.trim() === '') return;  
    tasks.push({ text: taskInput.value.trim(), completed: false });  
    taskInput.value = '';  
    updateLocalStorage();  
    renderTasks();  
}  

function toggleComplete(e) {  
    if (e.target.tagName === 'LI') {  
        const index = e.target.dataset.index;  
        tasks[index].completed = !tasks[index].completed;  
        updateLocalStorage();  
        renderTasks();  
    }  
}  

function updateLocalStorage() {  
    localStorage.setItem('tasks', JSON.stringify(tasks));  
}  

// Initial render  
renderTasks();