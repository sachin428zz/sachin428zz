import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

const TaskList = ({ tasks, onEdit, onDelete, onUpdate, editingTask, onCancelEdit }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks found. Create your first task!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task._id}>
          {editingTask && editingTask._id === task._id ? (
            <TaskForm
              initialData={editingTask}
              onSubmit={(data) => onUpdate(task._id, data)}
              onCancel={onCancelEdit}
            />
          ) : (
            <TaskCard
              task={task}
              onEdit={() => onEdit(task)}
              onDelete={() => onDelete(task._id)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
