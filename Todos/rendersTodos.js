import { toDos } from "../Database/toDos";

export function renderTodos(){
    
    toDos.forEach((toDo) => {
        console.log(toDo)
        const toDoDiv  = document.createElement("div")
        toDoDiv.id = toDo.id
    
        const todoTask = document.createElement('span')
        todoTask.textContent = toDo.taskName
        todoTask.classList.add('taskName')
        toDoDiv.appendChild(todoTask)
    
        const todoStatus = document.createElement('span')
        todoStatus.textContent = toDo.status
        todoStatus.classList.add('taskStatus')
        toDoDiv.appendChild(todoStatus)
    
        const toDoList = document.getElementById('toDos')
        toDoList.appendChild(toDoDiv)
    });
}