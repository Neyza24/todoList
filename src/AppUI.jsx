
import { TodoContext } from './context/todoContext';
import { CreateButton } from "./components/CreateButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { useContext } from 'react';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import './AppUI.css';
import banner from './assets/student.png';
import { useState } from 'react';


const AppUI = () => {

    const { error, loading, searchedToDos, completeTodo, deleteTodo, openModal, setOpenModal } = useContext(TodoContext);

    window.scrollTo(0, 0)


    return (
        <div className='container'>

            <div className='banner'>
                <img  className='imgB' src={banner} alt='banner'/>
            </div>


            <div className='todo'>
            <TodoCounter />
            <TodoSearch />

            <TodoList >
                {error && <p>Hay un error</p>}
                {loading && <p>Estamos cargando, no desesperes</p>}
                {(!loading && !searchedToDos.length) && <p>Crea tu siguiente tarea</p>}

                {searchedToDos.map(toDo => (
                    <TodoItem
                        key={toDo.text}
                        text={toDo.text}
                        completed={toDo.completed}
                        onComplete={() => completeTodo(toDo.text)} //
                        onDelete={() => deleteTodo(toDo.text)}
                    />
                ))}
            </TodoList>

            {
                !!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }

            <CreateButton
                setOpenModal={setOpenModal}
            />
            </div>
            

        </ div>
    )
}

export { AppUI };