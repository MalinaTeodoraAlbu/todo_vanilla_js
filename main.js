
import {login} from "./Login/login.js"
import {logout} from "./Login/logout.js"
import {toDos} from './Database/toDos.js'
import {addToDo} from './Todos/add.js'
import {editToDo} from './Todos/edit.js'
import {renderTodos} from './Todos/rendersTodos.js'

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

renderTodos()


const logoutButton = document.getElementById("logout")
logoutButton.addEventListener("click", logout)




const addButton = document.getElementById("addEditSubmit")
addButton.addEventListener("click", addToDo)
