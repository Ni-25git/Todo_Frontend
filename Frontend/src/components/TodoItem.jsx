import { useState } from 'react';

const TodoItem = ({ todo, isEditing, onToggle, onEdit, onSave, onCancel, onDelete }) => {
  const [editData, setEditData] = useState({
    title: todo.title,
    description: todo.description,
    priority: todo.priority
  });

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    if (editData.title.trim() && editData.description.trim()) {
      onSave(todo._id, editData);
    }
  };

  const handleCancel = () => {
    setEditData({
      title: todo.title,
      description: todo.description,
      priority: todo.priority
    });
    onCancel();
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return 'priority-medium';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isEditing) {
    return (
      <div className={`todo-item editing ${getPriorityColor(editData.priority)}`}>
        <div className="todo-content">
          <div className="form-row">
            <input
              type="text"
              name="title"
              value={editData.title}
              onChange={handleChange}
              className="edit-input"
              placeholder="Task title"
            />
            <select
              name="priority"
              value={editData.priority}
              onChange={handleChange}
              className="edit-select"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <textarea
            name="description"
            value={editData.description}
            onChange={handleChange}
            className="edit-textarea"
            placeholder="Task description"
            rows="3"
          />
        </div>
        <div className="todo-actions">
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-item ${todo.status ? 'completed' : ''} ${getPriorityColor(todo.priority)}`}>
      <div className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.status}
          onChange={() => onToggle(todo._id)}
          className="checkbox"
        />
      </div>
      <div className="todo-content">
        <div className="todo-header">
          <h4 className={`todo-title ${todo.status ? 'completed' : ''}`}>
            {todo.title}
          </h4>
          <span className={`priority-badge ${getPriorityColor(todo.priority)}`}>
            {todo.priority}
          </span>
        </div>
        <p className={`todo-description ${todo.status ? 'completed' : ''}`}>
          {todo.description}
        </p>
        <div className="todo-meta">
          <span className="todo-date">
            {formatDate(todo.createdAt)}
          </span>
        </div>
      </div>
      <div className="todo-actions">
        <button onClick={() => onEdit(todo._id)} className="edit-button">
          Edit
        </button>
        <button onClick={() => onDelete(todo._id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem; 