# Environment Setup

This project uses environment variables to configure the backend API URL.

## Setup Instructions

### Option 1: Using Scripts (Recommended)
1. **Run the setup script:**
   ```bash
   # Windows Command Prompt
   setup-env.bat
   
   # Windows PowerShell
   .\setup-env.ps1
   ```

### Option 2: Manual Setup
1. **Create `.env.local` file in the Frontend directory with:**
   ```
   VITE_API_BASE_URL=https://todo-backend-hi75.onrender.com
   VITE_DEV=false
   ```

2. **For development (optional):**
   If you want to use a local backend server, change to:
   ```
   VITE_API_BASE_URL=http://localhost:5000
   VITE_DEV=true
   ```

## Environment Variables

- `VITE_API_BASE_URL`: The base URL for the backend API
  - Production: `https://todo-backend-hi75.onrender.com`
  - Development: `http://localhost:5000` (optional)
- `VITE_DEV`: Controls whether to use proxy (true) or direct API calls (false)
  - Production: `false` (direct API calls)
  - Development: `true` (uses Vite proxy)

## API Configuration

The project uses a centralized API configuration in `src/config/api.js` that:
- Automatically uses the environment variable for the base URL
- Provides a configured axios instance with authentication
- Includes request/response interceptors for token management
- Handles unauthorized access automatically

## Backend Endpoints

The following endpoints are configured:
- Authentication: `/user/login`, `/user/register`, `/user/logout`
- Todos: `/todo`, `/todo/add`, `/todo/toggle/:id`, `/todo/update/:id`, `/todo/delete/:id`
- User: `/user/profile`

## Notes

- Environment files (`.env`, `.env.local`, etc.) are automatically ignored by git
- The API client automatically handles authentication tokens
- Unauthorized requests (401) will automatically redirect to login

## CORS Configuration

The project is configured to handle CORS issues:

1. **Development Mode**: Uses Vite proxy to avoid CORS issues
   - Frontend runs on `http://localhost:5173`
   - API requests are proxied through `/api` to the backend
   - No CORS issues in development

2. **Production Mode**: Uses direct API calls to the deployed backend
   - Backend is configured to allow requests from the production domain

3. **If you encounter CORS errors**:
   - Ensure you're running the development server on port 5173
   - Check that the backend CORS configuration matches your frontend origin
   - The proxy configuration should handle most CORS issues automatically 