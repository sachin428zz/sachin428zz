const TaskCard = ({ task, onEdit, onDelete }) => {
  const formatDate = (date) => {
    if (!date) return 'No due date';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusClass = (status) => {
    const classes = {
      'todo': 'status-todo',
      'in-progress': 'status-in-progress',
      'completed': 'status-completed',
    };
    return classes[status] || 'status-todo';
  };

  const getPriorityClass = (priority) => {
    const classes = {
      'low': 'priority-low',
      'medium': 'priority-medium',
      'high': 'priority-high',
    };
    return classes[priority] || 'priority-medium';
  };

  const getStatusLabel = (status) => {
    const labels = {
      'todo': 'To Do',
      'in-progress': 'In Progress',
      'completed': 'Completed',
    };
    return labels[status] || status;
  };

  return (
    <div className="task-card">
      <div className="task-card-header">
        <h3>{task.title}</h3>
        <div className="task-badges">
          <span className={`badge ${getStatusClass(task.status)}`}>
            {getStatusLabel(task.status)}
          </span>
          <span className={`badge ${getPriorityClass(task.priority)}`}>
            {task.priority}
          </span>
        </div>
      </div>
      
      <p className="task-description">{task.description}</p>
      
      <div className="task-card-footer">
        <div className="task-meta">
          <span className="task-date">📅 {formatDate(task.dueDate)}</span>
        </div>
        <div className="task-actions">
          <button onClick={onEdit} className="btn-edit">
            Edit
          </button>
          <button onClick={onDelete} className="btn-delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
