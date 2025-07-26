import { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="app">
        <div className="auth-container">
          <div className="auth-tabs">
            <button 
              className={`auth-tab ${showLogin ? 'active' : ''}`}
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
            <button 
              className={`auth-tab ${!showLogin ? 'active' : ''}`}
              onClick={() => setShowLogin(false)}
            >
              Register
            </button>
          </div>
          {showLogin ? (
            <Login 
              setIsAuthenticated={setIsAuthenticated} 
              setUser={setUser}
            />
          ) : (
            <Register 
              setIsAuthenticated={setIsAuthenticated} 
              setUser={setUser}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <TodoApp user={user} onLogout={handleLogout} />
    </div>
  );
}

export default App;
