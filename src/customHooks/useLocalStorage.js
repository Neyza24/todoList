import {useState, useEffect} from 'react';

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    //estado para el value de todo
    const [item, setItem] = useState(initialValue);
  
  
    useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
  
        } catch( error ) {
          setError(error)
        }
        
  
      }, 2000)
    },
      []
    )
  
  
  
  
    // Creamos la función en la que actualizaremos nuestro localStorage
    const saveItem = (newItem) => {
  
      try{
        // Convertimos a string nuestros TODOs
      const stringfiedItem = JSON.stringify(newItem);
      // Los guardamos en el localStorage
      localStorage.setItem(itemName, stringfiedItem);
      // Actualizamos nuestro estado
      setItem(newItem);
  
      } catch (error) {
        setError(error);
      }
  
    }
  
  
    return {
      item,
      saveItem,
      loading,
      error
    }
  
  }

  export {useLocalStorage};