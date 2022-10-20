import React, { useContext } from 'react';
import { TodoContext } from '../context/todoContext';
import './TodoCounter.css';

const TodoCounter = () => {

  const { totalToDos, completedToDos } = useContext(TodoContext);



  return (
    <h2 className='title'>Completaste {completedToDos} de {totalToDos} tareas </h2>
  )
}

export {TodoCounter} ; //esta forma de exportar nos asegura que se escriba este nombre tal cual cuando queramos importar desde otro lugar. Export default da paso a nombrar como queramos al importar este componente