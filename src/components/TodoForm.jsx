import React, { useContext } from 'react'
import { useState } from 'react'
import { TodoContext } from '../context/todoContext'
import './TodoForm.css';

const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = useState('');

    const { addTodo, setOpenModal } = useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Agrega tus ToDos</label>

            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Agrega una nueva tarea'
            />

            <div className="TodoForm-buttonContainer">
                <button
                    type='button'
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    type='submit'
                    className="TodoForm-button TodoForm-button--add"
                    onClick={onSubmit}
                >
                    Agregar
                </button>

            </div>


        </form>
    )
}

export { TodoForm }