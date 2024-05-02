document.addEventListener("DOMContentLoaded", function() {
    loadTask();
});

function loadTask() {
    const tasks= JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList= document.getElementById("task-list");
}
taskList.innerHTML = ""
task.forEach(task => {

    const li = document.createElement("li");
    li.innerText = ` 
    <span class="${task.completed ? `complete` : ``}">${task.text} </span>
    <button class = "delete-btn" onClick="deleteTask(${task.id})">Delete</button> 
    <button onclick= "toggleComplete(${task.id})">${task.completed ? `Undo` : `Complete`}</button>

    `;
    taskList.appendChild(li);
   });

    //funtion to add task
    function addTask() {
        const input = document.getElementById("task-input");
        const text = input.value.trim();
        if (text !==""){
            const task = JSON.parse(localStorage.getItem("tasks")) || [];
             
        }
    }
      const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();



function deleteTask(id) {
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks = tasks.filter(task => task.id !== id);
localStorage.setItem("tasks", JSON.stringify(tasks));
loadTasks();
}

function toggleComplete(id) {
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks = tasks.map(task => {
    if (task.id === id) {
        task.completed = !task.completed;
    }
    return task;
});
localStorage.setItem("tasks", JSON.stringify(tasks));
loadTasks();
}


    

       
    


