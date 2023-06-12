import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp, setTodos }) => {
  const delTodo = (id) => {
    setTodos((todos) => (
      [
        ...todos.filter((todo) => ( todo.id !== id)),
      ]
    ));
  };

  const handleChange = (id) => {
    setTodos((prevState) => (
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    )
    );
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input type="checkbox"
          checked={itemProp.completed} 
          onChange={() => handleChange(itemProp.id)}  
        />

        <button onClick={() => delTodo(itemProp.id)}>
          Delete
        </button>
        
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoItem;