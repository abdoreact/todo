import React from 'react';
import TodoContextProvider from './context/TodoContextProvider'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos';
function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <Todos/>
        <CreateTodo/>
      </div>
    </TodoContextProvider>
  );
}

export default App;
