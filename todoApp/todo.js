class Todo {
    constructor() {
        this.todos = [];
    }

    addTodo (value) {
        this.todos.push({id: parseInt(Math.random() * 1000).toString(), value: value})
    }

    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }

    updateTodo(id,value) {
        this.todo = this.todos.map((todo) => {
            if(todo.id === id) {
                return {id,value};
            }
            return todo
        })
    }

    isEmpty() {
        return this.todos.length === 0;
    }

    getTodos() {
        return this.todos;
    }
}