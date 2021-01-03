import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';



const TodoList = () =>{
    const [todos,setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodo = [todo, ...todos];
        setTodos(newTodo);
    };
    
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    return (
        <div>
            <h1>Today's CheckList</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo ={completeTodo} removeTodo={removeTodo}/>
        </div>
    );
};

export default TodoList;