import { toDos } from "../Database/toDos.js";

export function addToDo(e){
    e.preventDefault();
    console.log("Vrei sa adaugi un task")
    
    let newId = toDos[toDos.length-1].id + 1
    let newtoDo = {}
    newtoDo.id = newId
    newtoDo.taskName = document.getElementById('addEditTaskName').value
    newtoDo.status = document.getElementById('addEditTaskStatus').value

    toDos.push(newtoDo)
    console.log(toDos)
}