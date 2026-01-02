@echo off
echo Adding remote...
git remote remove origin 2>nul
git remote add origin https://github.com/creativynx/creativynx-site.git
if %errorlevel% neq 0 (
    echo Failed to add remote
    exit /b %errorlevel%
)

echo Verifying remote...
git remote -v

echo Adding CNAME...
git add public\CNAME
git commit -m "chore: Add CNAME for custom domain"

echo Pushing to GitHub...
git push -u origin main
