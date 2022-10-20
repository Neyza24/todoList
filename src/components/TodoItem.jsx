import React from 'react'
import './TodoItem.css';

const TodoItem = ({ text, completed, onComplete, onDelete }) => {



  return (
    <li className="TodoItem" >

      <p
        className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}
      >
        {text}
      </p>

      <div className='wrapIcon'>
        <span
          className={`fas fa-check ${completed && 'fas fa-check--active'}`}
          onClick={onComplete}
        />
        <span
          className="fas fa-trash"
          onClick={onDelete}
        />
      </div>

    </li>
  )
}

export { TodoItem };