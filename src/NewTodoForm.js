import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// Create a new todo form and handle changes/submits.
const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        text: ''
    }
    
    const [todoData, setTodoData] = useState(INITIAL_STATE);
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData(todoData => ({
      ...todoData,
      [name]: value
    }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todoData);
        addTodo({ ...todoData, id: uuid() });
        setTodoData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='text'>Text:</label>
            <input id='text' type='text' name='text' placeholder='Text' value={todoData.text} onChange={handleChange} />
            
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;