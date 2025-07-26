import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';

const TodoApp = ({ user, onLogout }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
  });

  // Add auth token to requests
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await api.get('/todo');
      setTodos(response.data.todos);
      setError('');
    } catch (error) {
      setError('Failed to fetch todos');
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todoData) => {
    try {
      const response = await api.post('/todo/add', todoData);
      setTodos(prev => [response.data.newTodo, ...prev]);
    } catch (error) {
      setError('Failed to add todo');
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const response = await api.patch(`/todo/toggle/${id}`);
      setTodos(prev => 
        prev.map(todo => 
          todo._id === id ? response.data.todo : todo
        )
      );
    } catch (error) {
      setError('Failed to update todo');
      console.error('Error toggling todo:', error);
    }
  };

  const updateTodo = async (id, todoData) => {
    try {
      const response = await api.put(`/todo/update/${id}`, todoData);
      setTodos(prev => 
        prev.map(todo => 
          todo._id === id ? response.data.todo : todo
        )
      );
    } catch (error) {
      setError('Failed to update todo');
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/todo/delete/${id}`);
      setTodos(prev => prev.filter(todo => todo._id !== id));
    } catch (error) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', error);
    }
  };

  const filterTodos = async (status) => {
    try {
      setLoading(true);
      if (status === 'all') {
        await fetchTodos();
      } else {
        const response = await api.get(`/todo/filter/${status}`);
        setTodos(response.data.todos);
      }
      setFilter(status);
      setError('');
    } catch (error) {
      setError('Failed to filter todos');
      console.error('Error filtering todos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.status;
    if (filter === 'pending') return !todo.status;
    return true;
  });

  return (
    <div className="todo-app">
      <header className="todo-header">
        <div className="user-info">
          <h1>Welcome, {user?.name}!</h1>
          <p>Manage your tasks efficiently</p>
        </div>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </header>

      <main className="todo-main">
        <TodoForm onAddTodo={addTodo} />
        
        <TodoFilter 
          currentFilter={filter} 
          onFilterChange={filterTodos}
          todoCount={todos.length}
          completedCount={todos.filter(todo => todo.status).length}
        />

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        )}
      </main>
    </div>
  );
};

export default TodoApp; 