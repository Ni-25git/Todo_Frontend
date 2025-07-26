import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onUpdate, onDelete }) => {
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = async (id, todoData) => {
    await onUpdate(id, todoData);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  if (todos.length === 0) {
    return (
      <div className="todo-list empty">
        <div className="empty-state">
          <h3>No tasks found</h3>
          <p>Add a new task to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          isEditing={editingId === todo._id}
          onToggle={onToggle}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList; 