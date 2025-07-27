Write-Host "Creating .env.local file for production backend..." -ForegroundColor Green

$envContent = @"
VITE_API_BASE_URL=https://todo-backend-hi75.onrender.com
VITE_DEV=false
"@

$envContent | Out-File -FilePath ".env.local" -Encoding UTF8

Write-Host "Environment file created successfully!" -ForegroundColor Green
Write-Host "The frontend will now use the deployed backend at: https://todo-backend-hi75.onrender.com" -ForegroundColor Yellow
Write-Host ""
Read-Host "Press Enter to continue" 