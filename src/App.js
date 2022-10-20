import { AppUI } from './AppUI';
import { TodoProvider } from './context/todoContext';
import './App.css';


function App() {
  

  return (
    <TodoProvider>
      
      < AppUI />
      
    </TodoProvider>
  );
}

export default App;
