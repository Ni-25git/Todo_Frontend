@echo off
echo Creating .env.local file for production backend...
echo VITE_API_BASE_URL=https://todo-backend-hi75.onrender.com > .env.local
echo VITE_DEV=false >> .env.local
echo.
echo Environment file created successfully!
echo The frontend will now use the deployed backend at: https://todo-backend-hi75.onrender.com
echo.
pause 