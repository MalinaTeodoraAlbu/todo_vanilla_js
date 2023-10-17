import { toDos } from "../Database/toDos.js";
import { deleteToDo } from "./delete.js";

export function renderTodos(){
    document.getElementById("toDos").innerHTML = " <h1>My To Dos</h1>"
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
    
        const toDoDeletButton = document.createElement('button')
        toDoDeletButton.textContent = "X"
        toDoDeletButton.classList.add('taskButtons')
        toDoDeletButton.addEventListener("click", deleteToDo)
        toDoDiv.appendChild(toDoDeletButton)

        const toDoList = document.getElementById('toDos')
        toDoList.appendChild(toDoDiv)
    });
}