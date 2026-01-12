import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskStats from '../components/TaskStats';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({ todo: 0, 'in-progress': 0, completed: 0 });
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    fetchTasks();
    fetchStats();
  }, [filter]);

  const fetchTasks = async () => {
    try {
      const params = filter !== 'all' ? { status: filter } : {};
      const response = await axios.get('http://localhost:5000/api/tasks', { params });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks/stats');
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      await axios.post('http://localhost:5000/api/tasks', taskData);
      fetchTasks();
      fetchStats();
      setShowForm(false);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleUpdateTask = async (id, taskData) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, taskData);
      fetchTasks();
      fetchStats();
      setEditingTask(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        fetchTasks();
        fetchStats();
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Task Manager</h1>
          <div className="header-actions">
            <span className="user-name">Welcome, {user?.name}</span>
            <button onClick={handleLogout} className="btn-secondary">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <TaskStats stats={stats} />

        <div className="tasks-section">
          <div className="tasks-header">
            <h2>My Tasks</h2>
            <div className="tasks-actions">
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Tasks</option>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <button 
                onClick={() => setShowForm(true)} 
                className="btn-primary"
              >
                + New Task
              </button>
            </div>
          </div>

          {showForm && (
            <TaskForm
              onSubmit={handleCreateTask}
              onCancel={() => setShowForm(false)}
            />
          )}

          {loading ? (
            <div className="loading">Loading tasks...</div>
          ) : (
            <TaskList
              tasks={tasks}
              onEdit={setEditingTask}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
              editingTask={editingTask}
              onCancelEdit={() => setEditingTask(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
