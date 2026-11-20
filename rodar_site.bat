@echo off
cd /d "%~dp0"
echo Iniciando o site do Loft Boicucanga em http://localhost:4321 ...
start "" "http://localhost:4321"
npm run dev
pause
