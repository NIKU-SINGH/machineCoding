const todo = new Todo();

const todoInput = document.querySelector("#todoInput");
const todoListContainer = document.querySelector("#todoListContainer");

const emptyNode = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

function renderTodoList() {
  emptyNode(todoListContainer);
  todo.getTodos().map((todo) => {
    const LI = document.createElement("li");
    const DIV = document.createElement("div");
    const INPUT = document.createElement("input");
    const BUTTON = document.createElement("button");

    DIV.classList.add("listItems");
    INPUT.type = "text";
    INPUT.value = todo.value;
    BUTTON.innerText = "delete";
    BUTTON.setAttribute("id", todo.id);

    DIV.appendChild(INPUT);
    DIV.appendChild(BUTTON);

    LI.appendChild(DIV);

    todoListContainer.appendChild(LI);
  });
}

function addTodo() {
  const value = todoInput.value;

  if (value === "") {
    alert("Please enter valid todo");
    return;
  }

  todo.addTodo(value);

  renderTodoList();
}

function handleClick(e) {
  console.log(e.target);
  if(e && e.target && e.target.id && e.target.nodeName === "BUTTON") {
    todo.deleteTodo(e.target.id);
    renderTodoList();
  }
}
