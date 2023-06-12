import { useState} from 'react';
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodoList';
import { v4 } from 'uuid';

const TodosLogic = () => {
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
  
  const [todos, setTodos] = useState(  [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

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