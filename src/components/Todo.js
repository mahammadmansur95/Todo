import React, { useState } from 'react';
import TodoForm from './TodoForm';

const Todo = ({todos,completeTodo,removeTodo}) => {    
    const [edit,setEdit] = useState({
        id:null,
        value:''
    });

    return todos.map((todo,index) =>{
        return(
            <div
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key = {index}
            >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <i 
                        class="fas fa-times-circle delete-icon" 
                        onClick={() => removeTodo(todo.id)}
                    ></i>
                </div>
            </div>
        );
    });
};

export default Todo;