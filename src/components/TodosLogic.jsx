import { useState , useEffect } from 'react';
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodoList';
import { v4 } from 'uuid';

const TodosLogic = () => {
  function getInitialTodos () {
    const data = localStorage.getItem('todos');
    const convertedData = JSON.parse(data);
    return convertedData || [] ;
  }

  const [todos, setTodos] = useState(getInitialTodos());
  
  useEffect(() => {
    // storing data to local storage
    const data = JSON.stringify(todos);
    localStorage.setItem('todos', data);
  }, [todos]);

  const delTodo = (id) => {
    console.log('deleted', id);
  };
  
  const addTodoItem = (title) => {
    const newTodo = {
      id: v4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList todosProps={todos} setTodos={setTodos}
        delTodo={delTodo}
      />
    </div>  
  )
}
export default TodosLogic;