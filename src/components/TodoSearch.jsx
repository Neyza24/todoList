
import { useContext } from 'react';
import { TodoContext } from '../context/todoContext';
import './TodoSearch.css';

const TodoSearch = () => {

  const { searchValue, setSearchValue } = useContext(TodoContext);

 


  const onChangeValue = ( event ) => {
      console.log(event.target.value);
      setSearchValue(event.target.value)
  }

  return (
    <input 
    className='TodoSearch' 
    placeholder="Busca tus ToDos"
    value={searchValue}
    onChange={onChangeValue}
    
    />
   
  )
}

export  {TodoSearch};