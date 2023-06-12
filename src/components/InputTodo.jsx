import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({addTodoItem}) => {
  const refInput = useRef(null);
  const [message, setMessage] = useState('Add item');

  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };
  
  // ...
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = refInput.current.value;
    if (title.trim()) {
      addTodoItem(title);
      setMessage('');
      refInput.current.value='';
    } else {
      setMessage('Please Add Item');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        ref={refInput}
        placeholder="Add Todo..."
        // value={title}
        // onChange={handleChange}
      />
      <button className="input-submit" onClick={handleSubmit}>Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};
export default InputTodo;
