const TodoFilter = ({ currentFilter, onFilterChange, todoCount, completedCount }) => {
  const filters = [
    { key: 'all', label: 'All', count: todoCount },
    { key: 'pending', label: 'Pending', count: todoCount - completedCount },
    { key: 'completed', label: 'Completed', count: completedCount }
  ];

  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={`filter-button ${currentFilter === filter.key ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.key)}
          >
            {filter.label}
            <span className="filter-count">({filter.count})</span>
          </button>
        ))}
      </div>
      <div className="filter-stats">
        <span className="stat-item">
          Total: <strong>{todoCount}</strong>
        </span>
        <span className="stat-item">
          Completed: <strong>{completedCount}</strong>
        </span>
        <span className="stat-item">
          Pending: <strong>{todoCount - completedCount}</strong>
        </span>
      </div>
    </div>
  );
};

export default TodoFilter; 