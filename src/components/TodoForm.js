import React, { useState } from 'react';

const TodoForm = (props) => {
    const [input,setInput] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:input
        });

        //after hitting add button , text area should be clear
        setInput('');
    };

    const handleChange = e =>{
        setInput(e.target.value);
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo"
                name="text"
                className="todo-input"
                value={input}
                onChange={handleChange}
            />
            <button className="todo-btn" onClick={handleSubmit}>Add</button>
        </form>
    );
};

export default TodoForm;