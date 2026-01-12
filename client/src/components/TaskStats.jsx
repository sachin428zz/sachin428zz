const TaskStats = ({ stats }) => {
  const total = stats.todo + stats['in-progress'] + stats.completed;

  return (
    <div className="task-stats">
      <div className="stat-card stat-total">
        <div className="stat-icon">📊</div>
        <div className="stat-content">
          <h3>{total}</h3>
          <p>Total Tasks</p>
        </div>
      </div>
      
      <div className="stat-card stat-todo">
        <div className="stat-icon">📝</div>
        <div className="stat-content">
          <h3>{stats.todo}</h3>
          <p>To Do</p>
        </div>
      </div>
      
      <div className="stat-card stat-in-progress">
        <div className="stat-icon">⚡</div>
        <div className="stat-content">
          <h3>{stats['in-progress']}</h3>
          <p>In Progress</p>
        </div>
      </div>
      
      <div className="stat-card stat-completed">
        <div className="stat-icon">✅</div>
        <div className="stat-content">
          <h3>{stats.completed}</h3>
          <p>Completed</p>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
