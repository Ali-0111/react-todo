import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp, setTodos }) => {
  const [editability, setEditability] = useState(false);

  const refDemo = useRef(null);
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

  const hanldeEditing = () => {
    setEditability(!editability);
  };
  
  const handleUpdate = ( updatedTitle ,id ) => {
    setTodos((prevState) => (
      prevState.map((item) => {
        if (item.id == id) {
         item.title = updatedTitle;
        }
        return item;
      })
    ));
  };

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setEditability(false);
      handleUpdate(refDemo.current.value, itemProp.id)
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode ={};
  const editMode ={};

  if (editability) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none'
  }

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input type="checkbox"
          checked={itemProp.completed} 
          onChange={() => handleChange(itemProp.id)}  
        />
        <button onClick={hanldeEditing} >
          Edit
        </button>

        <button onClick={() => delTodo(itemProp.id)}>
          Delete
        </button>
        
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        ref={refDemo}
        defaultValue={itemProp.title}
        className={styles.textInput}
        // onChange={(e) => handleUpdate(e.target.value ,itemProp.id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoItem;