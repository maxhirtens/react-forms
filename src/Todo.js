import React from "react";

const Todo = ({
    id,
    handleRemove,
    text}) => {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div className="todo">
                Text: {text}
                <button onClick={remove}>  X  </button>
            </div>
        </div>
    )
}

export default Todo;