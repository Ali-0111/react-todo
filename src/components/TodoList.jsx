import TodoItem from '@/components/TodoItem';
import PropTypes from 'prop-types';

const TodosList = ({todosProps, setTodos, delTodo}) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        //React key to update item
        <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} delTodo={delTodo} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.string.isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodosList;