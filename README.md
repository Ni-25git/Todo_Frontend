# Real-Time To-Do List Application

A modern, real-time To-Do List web application built with React frontend and Node.js/Express backend with MongoDB database.

## Features

### Core Features
- ✅ **Add Tasks**: Add new tasks with title, description, and priority
- ✅ **Delete Tasks**: Remove tasks with real-time updates
- ✅ **Mark as Completed**: Toggle task completion status
- ✅ **Real-Time Updates**: All changes reflect immediately without page refresh
- ✅ **User Authentication**: Secure login/register system with JWT tokens

### Additional Features
- ✅ **Edit Tasks**: Inline editing of existing tasks
- ✅ **Filter/Sort Tasks**: Filter by all, completed, or pending tasks
- ✅ **Priority Levels**: Set task priority (Low, Medium, High)
- ✅ **Responsive Design**: Works on desktop and mobile devices
- ✅ **Modern UI**: Beautiful gradient design with smooth animations

## Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with gradients and animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn**

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Todo-Application
```

### 2. Backend Setup

Navigate to the backend directory:
```bash
cd Backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the Backend directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
SALT_ROUND=10
```

**Note**: 
- Replace `mongodb://localhost:27017/todo-app` with your MongoDB connection string
- Change the JWT_SECRET to a secure random string in production
- If using MongoDB Atlas, use the connection string provided by Atlas

### 3. Frontend Setup

Navigate to the frontend directory:
```bash
cd ../Frontend
```

Install dependencies:
```bash
npm install
```

## Running the Application

### 1. Start the Backend Server

In the Backend directory:
```bash
npm start
# or for development with auto-restart
npm run dev
```

The backend server will start on `http://localhost:5000`

### 2. Start the Frontend Development Server

In the Frontend directory:
```bash
npm run dev
```

The frontend application will start on `http://localhost:5173`

### 3. Access the Application

Open your browser and navigate to `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /user/register` - Register a new user
- `POST /user/login` - Login user

### Todo Operations
- `GET /todo` - Get all todos for authenticated user
- `POST /todo/add` - Add a new todo
- `PUT /todo/update/:id` - Update a todo
- `PATCH /todo/toggle/:id` - Toggle todo completion status
- `DELETE /todo/delete/:id` - Delete a todo
- `GET /todo/filter/:status` - Filter todos by status (all/completed/pending)

## Usage Guide

### 1. Registration/Login
- Click on "Register" to create a new account
- Fill in your name, email, and password
- Or use "Login" if you already have an account

### 2. Adding Tasks
- Use the "Add New Task" form at the top
- Enter a title and description
- Select priority level (Low, Medium, High)
- Click "Add Task"

### 3. Managing Tasks
- **Complete**: Check the checkbox to mark as completed
- **Edit**: Click the "Edit" button to modify task details
- **Delete**: Click the "Delete" button to remove the task

### 4. Filtering Tasks
- Use the filter buttons to view:
  - All tasks
  - Pending tasks only
  - Completed tasks only

### 5. Priority Levels
- **High Priority**: Red border and badge
- **Medium Priority**: Yellow border and badge
- **Low Priority**: Blue border and badge

## Project Structure

```
Todo-Application/
├── Backend/
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT authentication
│   ├── model/
│   │   ├── TodoModel.js       # Todo schema
│   │   └── UserModel.js       # User schema
│   ├── routes/
│   │   ├── TodoRouter.js      # Todo API routes
│   │   └── UserRouter.js      # User API routes
│   ├── index.js               # Main server file
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx      # Login component
│   │   │   ├── Register.jsx   # Register component
│   │   │   ├── TodoApp.jsx    # Main todo app
│   │   │   ├── TodoForm.jsx   # Add todo form
│   │   │   ├── TodoList.jsx   # Todo list container
│   │   │   ├── TodoItem.jsx   # Individual todo item
│   │   │   └── TodoFilter.jsx # Filter component
│   │   ├── App.jsx            # Main app component
│   │   ├── App.css            # Styles
│   │   └── main.jsx           # App entry point
│   └── package.json
└── README.md
```

## Security Features

- **Password Hashing**: Passwords are hashed using bcrypt
- **JWT Authentication**: Secure token-based authentication
- **User Isolation**: Users can only access their own todos
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured CORS for secure cross-origin requests

## Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure MongoDB is accessible
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue in the repository. 