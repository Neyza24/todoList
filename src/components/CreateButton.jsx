import React, { useContext } from 'react'
import { TodoContext } from '../context/todoContext';
import './CreateButton.css';

const CreateButton = () => {

  const { openModal, setOpenModal } = useContext(TodoContext);

  const onClickButton = () => {
    // setOpenModal(true);
    // !openModal ? setOpenModal( true ) : setOpenModal( false );
    // setOpenModal(!openModal);
    setOpenModal(prevState => !prevState);
  }

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  )
}

export { CreateButton };