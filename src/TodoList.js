import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const Todolist = () => {
    const [todos, setTodos] = useState([]);
    
    const add = todoObj => {
    setTodos(todos => [...todos, todoObj]);
    };
    
    const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
    };
    
    const todosOnPage = todos.map(todo => (
        <Todo 
            key={todo.id}
            id={todo.id}
            text={todo.text}
            handleRemove={remove}
        />
    ))

    return (
        <div>
            <h1>Todos!</h1>
            <NewTodoForm addTodo={add} />
            {todosOnPage}
        </div>
           )
}



export default Todolist;