import { toDos } from "../Database/toDos.js";
import {renderTodos} from '../Todos/rendersTodos.js'

export function deleteToDo(e){
    e.preventDefault();
    console.log("Vrei sa stergi un task")
    
    console.log(e.target.parentElement.id)

    renderTodos()
    
}