import React, { createContext, useState } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
// import { types } from "../types/types";
// import { userReducer } from "./userReducer";


const TodoContext = createContext();


function TodoProvider({ children }) {

    const {
        item: toDos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    //array de dos posiciones: esatdo inicial, segunda posición es una función que nos permite modificar/actualizar nuestro estado
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedToDos = toDos.filter(toDo => toDo.completed === true).length;
    const totalToDos = toDos.length;

    let searchedToDos = [];

    if (!searchValue.length >= 1) {
        searchedToDos = toDos;

    } else {
        searchedToDos = toDos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            //cuales de los todo incluyen lo que estamos buscando
            return todoText.includes(searchText);
        })
    }

     //Añadir
     const addTodo = (text) => {

        const newTodos = [...toDos]
        newTodos.push({
            completed: false,
            text
        })
        saveTodos(newTodos);
    }

    //completando todos
    const completeTodo = (text) => {
        const todoIndex = toDos.findIndex(todo => todo.text === text);
        const newTodos = [...toDos]
        newTodos[todoIndex].completed = true;
        // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
        saveTodos(newTodos);
    }

    //eliminando todos
    const deleteTodo = (text) => {
        const todoIndex = toDos.findIndex(todo => todo.text === text);
        const newTodos = [...toDos]
        newTodos.splice(todoIndex, 1);
        // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };