const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement; 
    // event.target.parentElement.innerText => innerText로 span과 button의 innerText가 같이 나옴
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // toDos에서 li 제거
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = " ❌"
    button.addEventListener("click", deleteTodo);
    li.appendChild(span); // span을 li 안에 자식으로 넣기 
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // 변수에 저장해두고, 
    toDoInput.value = ""; 
    const newTodoObj = {
        id: Date.now(),
        text: newTodo,
    }
    toDos.push(newTodoObj);  // form에서는 사라지게 하기 
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) { // savedToDos가 있으면
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function sexyFilter() { // array 아이템을 유지하려면, function에서 true를 리턴해야 함

}