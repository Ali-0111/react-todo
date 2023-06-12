import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from '@/components/TodoApp';
import '@/styles/app.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //ensure that developers follow the React best practices
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
