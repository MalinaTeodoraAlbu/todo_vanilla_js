
import {login} from "./Login/login.js"
import {logout} from "./Login/logout.js"
import {toDos} from './Database/toDos.js'
import {addToDo} from './Todos/add.js'
import {editToDo} from './Todos/edit.js'

const loginButton = document.getElementById("loginSubmit")

loginButton.addEventListener("click", login)

const isLoggedIn = localStorage.getItem("isLoggedIn")
if(isLoggedIn){
    document.getElementById('login').setAttribute('hidden', 'true');
    document.getElementById('register').setAttribute('hidden', 'true');
    document.getElementById('user').removeAttribute('hidden');
    document.getElementById('toDos').removeAttribute('hidden');
    document.getElementById('add/edit').removeAttribute('hidden');
    document.getElementById("greetings").textContent =
        'Salut ' + localStorage.getItem('username');
}


const logoutButton = document.getElementById("logout")
logoutButton.addEventListener("click", logout)

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


const addButton = document.getElementById("addEditSubmit")
logoutButton.addEventListener("click", addToDo)
