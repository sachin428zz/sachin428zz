# Task Management System - MERN Stack

A full-stack Task Management web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. This project demonstrates industry-standard practices for building modern web applications.

## 🚀 Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Task Management**: Create, read, update, and delete tasks
- **Task Filtering**: Filter tasks by status (Todo, In Progress, Completed)
- **Task Prioritization**: Set task priority levels (Low, Medium, High)
- **Due Dates**: Assign and track task deadlines
- **Statistics Dashboard**: View task statistics at a glance
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Technology Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing

### Frontend
- **React**: UI library
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **Vite**: Build tool and dev server
- **Context API**: State management

## 📋 Prerequisites

Before running this project, make sure you have installed:

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas account)
- npm or yarn package manager

## 🔧 Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd sachin428zz
```

### 2. Setup Backend

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env file with your MongoDB URI and JWT secret
```

**Server Environment Variables (.env):**
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your-secret-key-change-this-in-production
NODE_ENV=development
```

### 3. Setup Frontend

```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install
```

## 🚀 Running the Application

### Start Backend Server

```bash
# From the server directory
cd server
npm run dev
```

The server will start on `http://localhost:5000`

### Start Frontend Application

```bash
# From the client directory (in a new terminal)
cd client
npm run dev
```

The application will start on `http://localhost:5173`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Tasks
- `GET /api/tasks` - Get all tasks for logged-in user (Protected)
- `GET /api/tasks/:id` - Get a specific task (Protected)
- `POST /api/tasks` - Create a new task (Protected)
- `PUT /api/tasks/:id` - Update a task (Protected)
- `DELETE /api/tasks/:id` - Delete a task (Protected)
- `GET /api/tasks/stats` - Get task statistics (Protected)

### Health Check
- `GET /api/health` - Check server status

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication. When a user logs in or registers:
1. The server validates credentials
2. A JWT token is generated
3. The token is stored in localStorage on the client
4. The token is sent with each protected API request in the Authorization header

## 📁 Project Structure

```
sachin428zz/
├── server/                 # Backend application
│   ├── config/            # Configuration files
│   │   └── db.js          # Database connection
│   ├── controllers/       # Request handlers
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/        # Custom middleware
│   │   └── auth.js        # Authentication middleware
│   ├── models/           # Database models
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/           # API routes
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── .env.example      # Example environment variables
│   ├── index.js          # Server entry point
│   └── package.json
│
├── client/               # Frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskStats.jsx
│   │   ├── context/     # React Context
│   │   │   └── AuthContext.jsx
│   │   ├── pages/       # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── App.jsx      # Main App component
│   │   ├── App.css      # App styles
│   │   ├── index.css    # Global styles
│   │   └── main.jsx     # App entry point
│   └── package.json
│
└── README.md            # Project documentation
```

## 🎨 Features Overview

### User Registration & Login
- Users can create an account with name, email, and password
- Passwords are securely hashed using bcryptjs
- JWT tokens are used for maintaining user sessions

### Task Management Dashboard
- View all tasks in a clean, organized interface
- Filter tasks by status (Todo, In Progress, Completed)
- Create new tasks with title, description, priority, status, and due date
- Edit existing tasks inline
- Delete tasks with confirmation
- View task statistics in card format

### Task Properties
- **Title**: Short description of the task (max 100 characters)
- **Description**: Detailed task information (max 500 characters)
- **Status**: Todo, In Progress, or Completed
- **Priority**: Low, Medium, or High
- **Due Date**: Optional deadline for the task

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Protected API routes
- CORS configuration
- Input validation
- Secure HTTP headers

## 🌟 Best Practices Implemented

- **RESTful API Design**: Clean and consistent API endpoints
- **MVC Architecture**: Separation of concerns with Models, Controllers, and Routes
- **Component-Based UI**: Reusable React components
- **State Management**: Context API for global state
- **Error Handling**: Comprehensive error handling on both frontend and backend
- **Responsive Design**: Mobile-first approach
- **Code Organization**: Logical file and folder structure
- **Environment Variables**: Secure configuration management

## 🚀 Future Enhancements

- Task categories/tags
- Task sharing and collaboration
- Email notifications
- Task comments
- File attachments
- Advanced filtering and sorting
- Task search functionality
- User profile management
- Dark mode
- Export tasks to PDF/CSV

## 👨‍💻 Author

**Sachin Kumar Gupta**
- Web Developer | MERN • Next.js • TypeScript
- [GitHub Profile](https://github.com/sachin428zz)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

⚡️ Built with passion and modern web technologies! ⚡️
